import { JustForYou } from "@/components/wishlist/just-for-you";
import { WishlistCards } from "@/components/wishlist/wishlist-cards";

export default function Wishlist() {
  return (
    <div className="my-10 px-20">
      <WishlistCards />
      <JustForYou />
    </div>
  );
}
