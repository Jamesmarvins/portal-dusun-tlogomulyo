import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Tlogomoyokunomor1selalu";

const paths = {
  translations: path.join(/*turbopackIgnore: true*/ process.cwd(), "data", "translations.json"),
  berita: path.join(/*turbopackIgnore: true*/ process.cwd(), "data", "berita.json"),
  umkm: path.join(/*turbopackIgnore: true*/ process.cwd(), "data", "umkm.json"),
};

// Helper to run Redis command on Vercel KV via REST API
async function runKVCommand(command) {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  
  if (!kvUrl || !kvToken) return null;

  try {
    const res = await fetch(kvUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${kvToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Gagal menjalankan perintah Vercel KV:", error);
    return null;
  }
}

// Helper to verify admin password from headers
function isAuthorized(request) {
  const password = request.headers.get("x-admin-password");
  return password === ADMIN_PASSWORD;
}

// GET - Load all editable data
export async function GET(request) {
  try {
    let translationsData = null;
    let beritaData = null;
    let umkmData = null;

    const hasKV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

    if (hasKV) {
      // Try to load from Vercel KV
      const tRes = await runKVCommand(["GET", "translations"]);
      if (tRes && tRes.result) translationsData = JSON.parse(tRes.result);

      const bRes = await runKVCommand(["GET", "berita"]);
      if (bRes && bRes.result) beritaData = JSON.parse(bRes.result);

      const uRes = await runKVCommand(["GET", "umkm"]);
      if (uRes && uRes.result) umkmData = JSON.parse(uRes.result);
    }

    // Fallback to local files if not in KV or KV empty
    if (!translationsData) {
      translationsData = JSON.parse(fs.readFileSync(paths.translations, "utf8"));
      if (hasKV) {
        await runKVCommand(["SET", "translations", JSON.stringify(translationsData)]);
      }
    }

    if (!beritaData) {
      beritaData = JSON.parse(fs.readFileSync(paths.berita, "utf8"));
      if (hasKV) {
        await runKVCommand(["SET", "berita", JSON.stringify(beritaData)]);
      }
    }

    if (!umkmData) {
      umkmData = JSON.parse(fs.readFileSync(paths.umkm, "utf8"));
      if (hasKV) {
        await runKVCommand(["SET", "umkm", JSON.stringify(umkmData)]);
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        translations: translationsData,
        berita: beritaData,
        umkm: umkmData,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Gagal memuat data: " + error.message },
      { status: 500 }
    );
  }
}

// POST - Save updated data
export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized. Password salah atau tidak disertakan." },
      { status: 401 }
    );
  }

  try {
    const { type, data } = await request.json();

    if (!type || (!paths[type] && type !== "translations" && type !== "berita" && type !== "umkm")) {
      return NextResponse.json(
        { success: false, error: "Tipe data tidak valid." },
        { status: 400 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: "Data tidak boleh kosong." },
        { status: 400 }
      );
    }

    const hasKV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

    if (hasKV) {
      // Save directly to Vercel KV
      const result = await runKVCommand(["SET", type, JSON.stringify(data)]);
      if (!result || result.error) {
        throw new Error(result?.error || "Gagal menyimpan ke Vercel KV");
      }
    } else {
      // Write updated data to local JSON file
      fs.writeFileSync(paths[type], JSON.stringify(data, null, 2), "utf8");
    }

    return NextResponse.json({
      success: true,
      message: `Data ${type} berhasil disimpan.`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Gagal menyimpan data: " + error.message },
      { status: 500 }
    );
  }
}
