import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Carousel } from "@/components/home/carousel";
import { FlashSales } from "@/components/home/flash-sales";
import { Categories } from "@/components/home/categories";
import { Month } from "@/components/home/month";
import { Products } from "@/components/home/products";
import { Featured } from "@/components/home/featured";
import { Service } from "@/components/home/service";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <div className="px-20">
        <FlashSales />
        <Categories />
        <Month />
        <Products />
        <Featured />
        <Service />
      </div>
      <Footer />
    </div>
  );
}
