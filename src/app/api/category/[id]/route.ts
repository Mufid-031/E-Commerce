import { deleteCategory, updateCategory } from "@/server/category";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;
    const body = await req.json();

    const response = await updateCategory({ id, ...body });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;

    const response = await deleteCategory(Number(id));

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
  }
};
