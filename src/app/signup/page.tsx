import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="grid grid-cols-2 my-10 h-[600px]">
      <div className="bg-accent-foreground w-full h-full"></div>
      <div className="flex flex-col justify-center mx-auto w-1/2 h-full">
        <header className="space-y-5 mb-10">
          <h1 className="font-semibold text-3xl">Create an account</h1>
          <p className="text-sm">Enter your details below</p>
        </header>
        <form className="space-y-5">
          <Input placeholder="Name" />
          <Input placeholder="Email or Phone Number" />
          <Input placeholder="Password" />
          <div className="flex flex-col gap-3 mb-10">
            <Button className="py-6">Create Account</Button>
            <Button className="py-6" variant="secondary">
              Sign Up with Google
            </Button>
          </div>
          <p className="text-center">
            Already have an account? <Link href="/signin">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
