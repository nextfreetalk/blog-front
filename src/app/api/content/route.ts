import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  console.log("searchParams",searchParams);

  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ message: "Filename query parameter is missing" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public', `${filename}`);
  console.log("filePath : ",filePath);

  try {
    const fileContents = await fs.readFile(filePath, 'utf-8');
    return NextResponse.json({ data: fileContents });
  } catch (error) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }
}
