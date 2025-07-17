import { Section } from "../section";
import { Card } from "../ui/card";

export const Featured = () => {
  return (
    <Section title="Featured" description="New Arrival">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-96">
        <Card className="bg-accent-foreground"></Card>
        <div className="flex flex-col gap-5">
          <Card className="h-1/2 bg-accent-foreground"></Card>
          <div className="grid grid-cols-2 gap-5 h-1/2">
            <Card className="bg-accent-foreground"></Card>
            <Card className="bg-accent-foreground"></Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
