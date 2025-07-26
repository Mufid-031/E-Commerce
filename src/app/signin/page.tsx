"use client";

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
import { signIn } from "@/server/users";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SignIn() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { success, message } = await signIn(values);

    if (success) {
      toast.success(message, { duration: 3000 });
      router.push("/");
    } else {
      toast.error(message, { duration: 3000 });
    }
  }

  return (
    <div className="grid grid-cols-2 my-10 h-[600px]">
      <div className="bg-accent-foreground w-full h-full"></div>
      <div className="flex flex-col justify-center mx-auto w-1/2 h-full">
        <header className="space-y-5 mb-10">
          <h1 className="font-semibold text-3xl">Log in to Exclusive</h1>
          <p className="text-sm">Enter your details below</p>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center gap-3 mb-10">
              <Button type="submit" className="py-6 w-1/2">
                Log In
              </Button>
              <Link href="/signup">Forget Password?</Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
