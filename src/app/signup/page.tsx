"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { z } from "zod";
import { signUp } from "@/server/users";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SignUp() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { success, message } = await signUp(values);

    if (success) {
      toast.success(message, { duration: 3000 });
      router.push("/signin");
    } else {
      toast.error(message, { duration: 3000 });
    }
  }

  async function signInWithGoogle() {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (data.error) {
      toast.error(data.error.message, { duration: 3000 });
      return;
    }

    toast.success("User logged in successfully", { duration: 3000 });
    router.push("/");
  }

  return (
    <div className="grid grid-cols-2 my-10 h-[600px]">
      <div className="bg-accent-foreground w-full h-full"></div>
      <div className="flex flex-col justify-center mx-auto w-1/2 h-full">
        <header className="space-y-5 mb-10">
          <h1 className="font-semibold text-3xl">Create an account</h1>
          <p className="text-sm">Enter your details below</p>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email or Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-3 mb-10">
              <Button type="submit" className="py-6">
                Create Account
              </Button>
              <Button
                type="button"
                className="py-6"
                variant="secondary"
                onClick={signInWithGoogle}
              >
                Sign In with Google
              </Button>
            </div>
            <p className="text-center">
              Already have an account? <Link href="/signin">Log in</Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
