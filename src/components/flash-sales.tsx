"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { ShowCounter } from "./datetime-display";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export const FlashSales = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  return (
    <section className="my-10 pl-5 lg:pl-20 px-5 lg:px-10 flex flex-col gap-10">
      <h4 className="text-red-400 text-sm relative before:absolute before:left-0 before:w-3 before:h-full before:bg-red-400 before:rounded pl-6 font-semibold">
        Today&apos;s
      </h4>
      <div className="flex lg:items-center justify-between">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          <h3 className="text-2xl lg:text-4xl font-semibold">Flash Sales</h3>
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
        <div className="flex lg:items-center justify-center gap-5">
          <Button className="rounded-full w-10 h-10" variant="secondary">
            <ArrowLeft />
          </Button>
          <Button className="rounded-full w-10 h-10" variant="secondary">
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="w-60 h-80 flex flex-col gap-2">
            <div className="w-full h-40 bg-slate-300"></div>
            <h4 className="font-semibold text-xs">HAVIT HV-G92 Gamepad</h4>
            <p className="text-xs text-slate-400">
              <span className="text-red-400">$120</span>
              <span className="line-through text-slate-400 ml-2">$150</span>
            </p>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <span className="text-xs text-slate-400 ml-2">(80)</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-baseline">
        <Button className="bg-red-400 hover:bg-red-500 cursor-pointer px-6 py-5">
          View All products
        </Button>
      </div>
    </section>
  );
};
