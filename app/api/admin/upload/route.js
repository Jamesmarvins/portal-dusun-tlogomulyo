import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "tlogomoyo2026";

function isAuthorized(request) {
  const password = request.headers.get("x-admin-password");
  return password === ADMIN_PASSWORD;
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized. Password salah atau tidak disertakan." },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { success: false, error: "Tidak ada file yang diunggah." },
        { status: 400 }
      );
    }

    // Read file bytes
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const uniqueFileName = `${Date.now()}-${cleanFileName}`;

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, uniqueFileName);
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      url: `/uploads/${uniqueFileName}`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Gagal mengunggah berkas: " + error.message },
      { status: 500 }
    );
  }
}
