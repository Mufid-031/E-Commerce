import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Carousel } from "@/components/home/carousel";
import { FlashSales } from "@/components/home/flash-sales";
import { Categories } from "@/components/home/categories";
import { Month } from "@/components/home/month";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <FlashSales />
      <Categories />
      <Month />
    </div>
  );
}
