import { addProduct, getProducts } from "@/server/product";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File;
  const price = formData.get("price") as string;
  const discount = formData.get("discount") as string;
  const category = formData.get("category") as string;

  const body = {
    name,
    description,
    image,
    price: Number(price),
    discount: Number(discount || 0),
    category: Number(category),
  };

  const response = await addProduct(body);

  return NextResponse.json(response, { status: response.status });
};

export const GET = async () => {
  const response = await getProducts();

  return NextResponse.json(response, { status: response.status });
};
