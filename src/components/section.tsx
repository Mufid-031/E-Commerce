import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ShowCounter } from "./datetime-display";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  variant?: "carousel" | "button";
  hasCountdown?: boolean;
  countdown?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  className?: string;
}

export const Section = ({
  title,
  description,
  children,
  variant = "carousel",
  hasCountdown = false,
  countdown: { days, hours, minutes, seconds } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  className,
}: SectionProps) => {
  return (
    <section
      className={cn(
        "md:my-10 md:pl-5 lg:pl-20 px-5 lg:px-10 flex flex-col gap-10",
        className
      )}
    >
      <h4 className="text-red-400 text-sm relative before:absolute before:left-0 before:w-3 before:h-full before:bg-red-400 before:rounded pl-6 font-semibold">
        {title}
      </h4>
      <div className="flex lg:items-center justify-between">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          {description && (
            <h3 className="text-2xl lg:text-4xl font-semibold">
              {description}
            </h3>
          )}
          {hasCountdown && (
            <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          )}
        </div>
        <div className="flex lg:items-center justify-center gap-5">
          {variant === "carousel" ? (
            <>
              <Button
                className="rounded-full w-10 h-10 cursor-pointer hover:bg-slate-200"
                variant="secondary"
              >
                <ArrowLeft />
              </Button>
              <Button
                className="rounded-full w-10 h-10 cursor-pointer hover:bg-slate-200"
                variant="secondary"
              >
                <ArrowRight />
              </Button>
            </>
          ) : (
            <Button className="bg-red-400 hover:bg-red-500 cursor-pointer px-6 py-2">
              View All
            </Button>
          )}
        </div>
      </div>
      {children}
      <Separator />
    </section>
  );
};
