import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'cv', 'Denis-Klymenko-CV.pdf');
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Denis-Klymenko-CV.pdf"',
      },
    });
  } catch (error) {
    console.error('Error reading CV file:', error);
    return NextResponse.json(
      { error: 'CV file not found' },
      { status: 404 },
    );
  }
}
