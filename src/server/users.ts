"use server";
import { auth } from "@/lib/auth";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      status: 200,
      success: true,
      message: "User logged in successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error logging in user",
    };
  }
};

export const signUp = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return {
      status: 200,
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      success: false,
      message: "Error creating user",
    };
  }
};
