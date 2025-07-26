import { addCategory, getCategories } from "@/server/category";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const response = await addCategory(body);

  return NextResponse.json(response, { status: response.status });
};

export const GET = async () => {
  const response = await getCategories();

  return NextResponse.json(response, { status: response.status });
};
