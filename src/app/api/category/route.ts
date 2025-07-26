import { addCategory, getCategories } from "@/server/category";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const response = await addCategory(body);

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const GET = async () => {
  try {
    const response = await getCategories();

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
  }
};
