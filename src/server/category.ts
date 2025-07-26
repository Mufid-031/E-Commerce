"use server";

import { db } from "@/db/drizzle";
import { category } from "@/db/schema";
import { eq } from "drizzle-orm";

export const addCategory = async ({
  name,
  discount = 0.0,
}: {
  name: string;
  discount?: number;
}) => {
  try {
    await db.insert(category).values({ name, discount });

    return {
      status: 200,
      success: true,
      message: "Category added successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error adding category",
    };
  }
};

export const getCategories = async () => {
  try {
    const categories = await db.select().from(category);

    return {
      status: 200,
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error getting categories",
    };
  }
};

export const updateCategory = async ({
  id,
  name,
  discount,
}: {
  id: number;
  name: string;
  discount: number;
}) => {
  try {
    await db
      .update(category)
      .set({ name, discount })
      .where(eq(category.id, id));

    return {
      status: 200,
      success: true,
      message: "Category updated successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error updating category",
    };
  }
};

export const deleteCategory = async (id: number) => {
  try {
    await db.delete(category).where(eq(category.id, id));

    return {
      status: 200,
      success: true,
      message: "Category deleted successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error deleting category",
    };
  }
};
