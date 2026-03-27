import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const form = await request.formData();
  const file = form.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  // Validate file size (4.5MB limit for free tier)
  const MAX_SIZE = 4.5 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: 'File too large. Maximum size is 4.5MB.' },
      { status: 400 }
    );
  }

  // Validate file type
  const allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'text/plain',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: 'File type not allowed. Supported: PDF, images, text, Word documents.' },
      { status: 400 }
    );
  }

  try {
    const blob = await put(file.name, file, {
      access: 'public',
    });

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
