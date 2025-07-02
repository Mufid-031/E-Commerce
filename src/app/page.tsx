import { Carousel } from "@/components/carousel";
import { FlashSales } from "@/components/flash-sales";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <FlashSales />
    </div>
  );
}
