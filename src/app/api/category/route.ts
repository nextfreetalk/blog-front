import { NextResponse } from "next/server";

export function GET() {
  const categories = [
    { name: "개발", path: "dev" },
    { name: "책", path: "book" },
    { name: "CS", path: "cs" },
  ];

  try {
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.error();
  }
}
