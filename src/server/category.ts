"use server";

import { db } from "@/db/drizzle";
import { category } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const categorySchema = z.object({
  name: z.string(),
  discount: z.number().optional(),
});

const updateCategorySchema = categorySchema.extend({ id: z.number() });

export const addCategory = async ({
  name,
  discount = 0.0,
}: z.infer<typeof categorySchema>) => {
  try {
    const parsed = categorySchema.parse({ name, discount });

    const existingCategory = await db
      .select()
      .from(category)
      .where(eq(category.name, name));

    if (existingCategory.length > 0) {
      return {
        status: 400,
        success: false,
        message: "Category already exists",
      };
    }

    await db
      .insert(category)
      .values({ name: parsed.name, discount: parsed.discount });

    return {
      status: 201,
      success: true,
      message: "Category added successfully",
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
      message: "Error adding category",
    };
  }
};

export const getCategories = async () => {
  try {
    const results = await db.select().from(category).orderBy(category.id);

    return {
      status: 200,
      success: true,
      message: "Categories fetched successfully",
      data: results,
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

export const getCategory = async (id: number) => {
  try {
    const result = await db.select().from(category).where(eq(category.id, id));

    return {
      status: 200,
      success: true,
      message: "Category fetched successfully",
      data: result,
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error getting category",
    };
  }
};

export const updateCategory = async ({
  id,
  name,
  discount,
}: z.infer<typeof updateCategorySchema>) => {
  try {
    const parsed = updateCategorySchema.parse({ id, name, discount });

    await db
      .update(category)
      .set({ name: parsed.name, discount: parsed.discount })
      .where(eq(category.id, id));

    return {
      status: 200,
      success: true,
      message: "Category updated successfully",
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
