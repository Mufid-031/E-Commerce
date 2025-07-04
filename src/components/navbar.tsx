"use client";

import { Heart, ShoppingCartIcon } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Sign Up",
      href: "/signup",
    },
  ];

  return (
    <nav className="container flex justify-between px-5 lg:px-20 items-center pt-6 pb-3 w-full border-b border-slate-300">
      <div className="flex flex-col justify-center gap-2 w-10 lg:hidden order-1 bg-accent p-2 rounded">
        <div className="w-full h-[1px] bg-black"></div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="w-full h-[1px] bg-black"></div>
      </div>
      <h1 className="text-2xl font-bold w-1/4 hidden lg:block lg:order-1">
        Exclusive
      </h1>
      <ul className="lg:flex items-center justify-center gap-10 w-2/4 order-1 hidden">
        {menuItems.map((item) => (
          <li key={item.name} className="cursor-pointer relative">
            <Link href={item.href}>{item.name}</Link>
            {pathname === item.href && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-slate-400"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 w-2/3 lg:w-1/4 order-2 lg:order-3">
        <Input
          placeholder="What are you looking for?"
          className="bg-accent w-60"
        />
        <Heart className="w-7 h-7" />
        <ShoppingCartIcon className="w-7 h-7" />
      </div>
    </nav>
  );
};
