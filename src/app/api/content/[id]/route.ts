import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { contentDic } from "@/model/data";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { searchParams } = new URL(request.url);
  const id = params.id;

  if (!id) {
    return NextResponse.json(
      { message: "Filename query parameter is missing" },
      { status: 400 },
    );
  }

  const contentInfo = contentDic[parseInt(id)];
  const filePath = path.join(process.cwd(), "public", `${contentInfo.fileUrl}`);
  console.log("filePath : ", filePath);

  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    return NextResponse.json({ data: fileContents, contentInfo: contentInfo });
  } catch (error) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }
}
