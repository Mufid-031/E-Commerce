import { Carousel } from "@/components/home/carousel";
import { FlashSales } from "@/components/home/flash-sales";
import { Categories } from "@/components/home/categories";
import { Month } from "@/components/home/month";
import { Products } from "@/components/home/products";
import { Featured } from "@/components/home/featured";
import { Service } from "@/components/home/service";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="px-20">
        <FlashSales />
        <Categories />
        <Month />
        <Products />
        <Featured />
        <Service />
      </div>
    </>
  );
}
