import { ProductCard } from "../product-card";
import { Section } from "../section";

export const Month = () => {
  return (
    <Section
      title="This Month"
      description="Best Selling Products"
      variant="button"
    >
      <div className="flex items-center gap-5">
        {[1, 2, 3, 4, 5].map((index) => (
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
    </Section>
  );
};
