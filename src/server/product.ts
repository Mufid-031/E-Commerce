"use server";

import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import { eq } from "drizzle-orm";

export const addProduct = async ({
  name,
  description,
  price,
  discount = 0.0,
  category,
}: {
  name: string;
  description: string;
  price: number;
  discount?: number;
  category: number;
}) => {
  try {
    await db
      .insert(product)
      .values({ name, description, price, discount, category });

    return {
      status: 201,
      success: true,
      message: "Product added successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error adding product",
    };
  }
};

export const getProducts = async () => {
  try {
    const products = await db.select().from(product);

    return {
      status: 200,
      success: true,
      message: "Products fetched successfully",
      data: products,
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error getting products",
    };
  }
};

export const updateProduct = async ({
  id,
  name,
  description,
  price,
  discount,
  category,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: number;
}) => {
  try {
    await db
      .update(product)
      .set({ name, description, price, discount, category })
      .where(eq(product.id, id));

    return {
      status: 200,
      success: true,
      message: "Product updated successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error updating product",
    };
  }
};

export const deleteProduct = async (id: number) => {
  try {
    await db.delete(product).where(eq(product.id, id));

    return {
      status: 200,
      success: true,
      message: "Product deleted successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error deleting product",
    };
  }
};
