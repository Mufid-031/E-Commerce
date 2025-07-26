import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Input } from "./ui/input";

export const Footer = () => {
  return (
    <footer className="w-full py-10 px-5 md:p-10 bg-accent-foreground flex md:justify-evenly gap-10 flex-wrap text-accent">
      <div>
        <h3 className="font-semibold text-2xl mb-5">Exclusive</h3>
        <h4 className="text-lg mb-5">Subscribe</h4>
        <p className="mb-3">Get 10% off your first order</p>
        <Input placeholder="Enter your email" />
      </div>
      <div>
        <h3 className="text-2xl mb-5">Support</h3>
        <ul className="flex flex-col gap-3">
          <li>Ahmad Mufid Risqi</li>
          <li>risqimufid50@gmail.com</li>
          <li>+6287715527904</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl mb-5">Account</h3>
        <ul className="flex flex-col gap-3">
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl mb-5">Quick Link</h3>
        <ul className="flex flex-col gap-3">
          <li>Privacy Policy</li>
          <li>Tearms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl mb-5">Download App</h3>
        <div className="flex gap-3 mb-10">
          <div className="w-1/2 h-20 bg-white"></div>
          <div className="w-1/2 h-20 flex flex-col gap-2">
            <div className="w-full h-1/2 bg-white"></div>
            <div className="w-full h-1/2 bg-white"></div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
};
