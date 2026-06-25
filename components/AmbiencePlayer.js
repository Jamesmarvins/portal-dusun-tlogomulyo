"use client";

import React, { useState, useEffect, useRef } from "react";

export default function AmbiencePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [isExpanded, setIsExpanded] = useState(false);

  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const chimeIntervalRef = useRef(null);
  const waterSourceRef = useRef(null);

  // Skala Pentatonik Pelog/Slendro Jawa (frekuensi dalam Hz)
  const gamelanNotes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];

  const startAmbience = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    // Master Volume
    if (!masterGainRef.current) {
      masterGainRef.current = ctx.createGain();
      masterGainRef.current.connect(ctx.destination);
    }
    masterGainRef.current.gain.setValueAtTime(volume, ctx.currentTime);

    // 1. GENERATOR SUARA AIR (Pink/Brown Noise -> Lowpass Filter)
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Lowpass filter untuk meniru gemericik air Kali Barong
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, ctx.currentTime);

    // LFO (Low Frequency Oscillator) untuk memberi efek riak air mengalir
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(150, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    const waterGain = ctx.createGain();
    waterGain.gain.setValueAtTime(0.18, ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(waterGain);
    waterGain.connect(masterGainRef.current);
    whiteNoise.start();

    waterSourceRef.current = { whiteNoise, lfo };

    // 2. GENERATOR DENTING GAMELAN / KARAWITAN
    const playGamelanChime = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state !== "running") return;

      const note = gamelanNotes[Math.floor(Math.random() * gamelanNotes.length)];
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(note, ctx.currentTime);

      // Amplop nada (Attack cepat, Decay panjang bergema seperti perunggu)
      const now = ctx.currentTime;
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.25, now + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      osc.connect(noteGain);
      noteGain.connect(masterGainRef.current);

      osc.start(now);
      osc.stop(now + 3.5);
    };

    // Mainkan nada gamelan pertama sesaat setelah mulai, lalu rutin tiap 3-6 detik
    setTimeout(playGamelanChime, 800);
    chimeIntervalRef.current = setInterval(() => {
      playGamelanChime();
    }, Math.floor(Math.random() * 3000) + 3500);

    setIsPlaying(true);
  };

  const stopAmbience = () => {
    if (chimeIntervalRef.current) {
      clearInterval(chimeIntervalRef.current);
    }
    if (waterSourceRef.current) {
      try {
        waterSourceRef.current.whiteNoise.stop();
        waterSourceRef.current.lfo.stop();
      } catch (e) {}
      waterSourceRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbience();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed left-4 bottom-4 z-40 flex flex-col items-start font-sans">
      {/* Expanded Player Box */}
      {isExpanded && (
        <div className="mb-3 w-72 sm:w-80 bg-slate-900/90 dark:bg-slate-900/95 text-white p-4.5 rounded-3xl shadow-2xl backdrop-blur-2xl border border-emerald-500/30 animate-fade-in-up">
          <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-700/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                Ambience Dusun
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Tutup pemutar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3.5 mb-4">
            {/* Spinning Vinyl Icon */}
            <div
              className={`relative w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 via-amber-500 to-emerald-400 p-0.5 shadow-lg flex items-center justify-center shrink-0 ${
                isPlaying ? "animate-spin" : ""
              }`}
              style={{ animationDuration: "6s" }}
            >
              <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center">
                <span className="text-lg">🌾</span>
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-slate-100 truncate">
                Kali Barong & Karawitan
              </p>
              <p className="text-[11px] text-emerald-300/80 font-medium">
                {isPlaying ? "🎵 Sedang Memutar..." : "⏸️ Jeda (Senyap)"}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                  isPlaying
                    ? "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/20"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30"
                }`}
              >
                {isPlaying ? (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                    <span>Hentikan Suara</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Putar Alunan</span>
                  </>
                )}
              </button>
            </div>

            {/* Volume Slider */}
            <div className="flex items-center gap-2.5 bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-700/50">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label="Atur volume"
              />
              <span className="text-[10px] font-mono text-slate-400 w-7 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-lg backdrop-blur-xl transition-all duration-300 border ${
          isPlaying
            ? "bg-emerald-950/90 text-emerald-300 border-emerald-500/50 shadow-emerald-900/30 ring-2 ring-emerald-500/30"
            : "bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-emerald-500"
        }`}
      >
        <div className="relative flex items-center justify-center">
          <span className={`text-base ${isPlaying ? "animate-bounce" : ""}`}>
            🎵
          </span>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          )}
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-tight">
          Suara Dusun
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
          isPlaying ? "bg-emerald-500 text-slate-950" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
        }`}>
          {isPlaying ? "On" : "Off"}
        </span>
      </button>
    </div>
  );
}
