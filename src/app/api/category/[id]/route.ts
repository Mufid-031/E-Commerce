import { deleteCategory, getCategory, updateCategory } from "@/server/category";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const response = await getCategory(Number(id));

  return NextResponse.json(response, { status: response.status });
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const body = await req.json();
  const response = await updateCategory({ id: Number(id), ...body });

  return NextResponse.json(response, { status: response.status });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const response = await deleteCategory(Number(id));

  return NextResponse.json(response, { status: response.status });
};
