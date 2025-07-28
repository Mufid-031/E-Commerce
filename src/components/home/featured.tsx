import { Section } from "../section";
import { Card } from "../ui/card";

export const Featured = () => {
  return (
    <Section title="Featured" description="New Arrival">
      <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-5 h-[500px]">
        <Card className="bg-accent-foreground col-span-2 lg:col-span-2 row-span-5 lg:row-span-2"></Card>
        <Card className="bg-accent-foreground lg:col-span-2 row-span-4 lg:row-span-1"></Card>
        <Card className="bg-accent-foreground col-span-1 row-span-2 lg:col-span-1 lg:row-span-1"></Card>
        <Card className="bg-accent-foreground col-span-1 row-span-2 lg:col-span-1 lg:row-span-1"></Card>
      </div>
    </Section>
  );
};
