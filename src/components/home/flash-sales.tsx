"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { Button } from "../ui/button";
import { Section } from "../section";
import { ProductCard } from "../product-card";

export const FlashSales = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  return (
    <Section
      title="Today's"
      description="Flash Sales"
      hasCountdown
      countdown={{ days, hours, minutes, seconds }}
    >
      <div>
        <div className="flex items-center gap-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <ProductCard
              key={index}
              name="Product Name"
              image=""
              price={100}
              discount={0.4}
              ratings={4}
              totalRatings={100}
            />
          ))}
        </div>
        <div className="flex justify-center items-baseline">
          <Button className="bg-red-400 hover:bg-red-500 cursor-pointer px-6 py-5">
            View All products
          </Button>
        </div>
      </div>
    </Section>
  );
};
