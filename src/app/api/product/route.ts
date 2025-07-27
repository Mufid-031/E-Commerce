import { addProduct, getProducts } from "@/server/product";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const response = await addProduct(body);

  return NextResponse.json(response, { status: response.status });
};

export const GET = async () => {
  const response = await getProducts();

  return NextResponse.json(response, { status: response.status });
};
