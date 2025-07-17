import { ProductCard } from "../product-card";
import { Section } from "../section";
import { Button } from "../ui/button";

export const Products = () => {
  return (
    <Section title="Our Products" description="Explore Our Products">
      <div className="flex items-center gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            name="Product Name"
            image=""
            price={125}
            discount={0}
            ratings={4.5}
            totalRatings={100}
          />
        ))}
      </div>
      <div className="flex items-center gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            name="Product Name"
            image=""
            price={125}
            discount={0}
            ratings={4.5}
            totalRatings={100}
          />
        ))}
      </div>
      <div className="flex justify-center items-baseline">
        <Button className="bg-red-400 hover:bg-red-500 cursor-pointer px-6 py-5">
          View All products
        </Button>
      </div>
    </Section>
  );
};
