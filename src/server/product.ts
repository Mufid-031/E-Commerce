"use server";

import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.file(),
  price: z.number(),
  discount: z.number().optional(),
  category: z.number(),
});

const updateProductSchema = productSchema.extend({ id: z.number() });

export const addProduct = async ({
  name,
  description,
  image,
  price,
  discount = 0.0,
  category,
}: z.infer<typeof productSchema>) => {
  try {
    const parsed = productSchema.parse({
      name,
      description,
      image,
      price,
      discount,
      category,
    });

    const signature = cloudinary.utils.api_sign_request(
      image,
      process.env.CLOUDINARY_API_SECRET as string
    );

    await db.insert(product).values({
      name: parsed.name,
      description: parsed.description,
      image: signature,
      price: parsed.price,
      discount: parsed.discount,
      category: parsed.category,
    });

    return {
      status: 201,
      success: true,
      message: "Product added successfully",
    };
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return {
        status: 400,
        success: false,
        message: "Validation error",
        issues: error.issues.map((issue) => issue.message).join(", "),
      };
    }

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
  image,
  price,
  discount,
  category,
}: z.infer<typeof updateProductSchema>) => {
  try {
    const parsed = updateProductSchema.parse({
      id,
      name,
      description,
      image,
      price,
      discount,
      category,
    });

    const signature = cloudinary.utils.api_sign_request(
      image,
      process.env.CLOUDINARY_API_SECRET as string
    );

    await db
      .update(product)
      .set({
        name: parsed.name,
        description: parsed.description,
        image: signature,
        price: parsed.price,
        discount: parsed.discount,
        category: parsed.category,
      })
      .where(eq(product.id, id));

    return {
      status: 200,
      success: true,
      message: "Product updated successfully",
    };
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return {
        status: 400,
        success: false,
        message: "Validation error",
        issues: error.issues.map((issue) => issue.message).join(", "),
      };
    }

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
