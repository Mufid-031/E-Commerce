import { ProductCard } from "../product-card";
import { Section } from "../section";

export const JustForYou = () => {
  return (
    <Section title="Just For You" variant="button">
      <div className="flex items-center gap-5 overflow-x-auto">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <ProductCard
            name="Product Name"
            image=""
            price={125}
            discount={0}
            ratings={4.5}
            totalRatings={100}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};
