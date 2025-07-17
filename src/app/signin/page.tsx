import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="grid grid-cols-2 my-10 h-[600px]">
      <div className="bg-accent-foreground w-full h-full"></div>
      <div className="flex flex-col justify-center mx-auto w-1/2 h-full">
        <header className="space-y-5 mb-10">
          <h1 className="font-semibold text-3xl">Log in to Exclusive</h1>
          <p className="text-sm">Enter your details below</p>
        </header>
        <form className="space-y-5">
          <Input placeholder="Email or Phone Number" />
          <Input placeholder="Password" />
          <div className="flex justify-between items-center gap-3 mb-10">
            <Button className="py-6 w-1/2">Log In</Button>
            <Link href="/signup">Forget Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
