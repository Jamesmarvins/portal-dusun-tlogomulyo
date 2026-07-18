import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "tlogomoyo2026";

const paths = {
  translations: path.join(/*turbopackIgnore: true*/ process.cwd(), "data", "translations.json"),
  berita: path.join(/*turbopackIgnore: true*/ process.cwd(), "data", "berita.json"),
  umkm: path.join(/*turbopackIgnore: true*/ process.cwd(), "data", "umkm.json"),
};

// Helper to verify admin password from headers
function isAuthorized(request) {
  const password = request.headers.get("x-admin-password");
  return password === ADMIN_PASSWORD;
}

// GET - Load all editable data
export async function GET(request) {
  try {
    const translationsData = JSON.parse(fs.readFileSync(paths.translations, "utf8"));
    const beritaData = JSON.parse(fs.readFileSync(paths.berita, "utf8"));
    const umkmData = JSON.parse(fs.readFileSync(paths.umkm, "utf8"));

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

    if (!type || !paths[type]) {
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

    // Write updated data to JSON file
    fs.writeFileSync(paths[type], JSON.stringify(data, null, 2), "utf8");

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
