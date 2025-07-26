import { Headphones, ShieldCheckIcon, TruckIcon } from "lucide-react";

export const Service = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full py-20 gap-10">
      <div className="flex flex-col items-center">
        <div className="w-22 h-22 bg-neutral-300 flex justify-center items-center rounded-full">
          <div className="w-16 h-16 bg-accent-foreground rounded-full flex justify-center items-center">
            <TruckIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-xl font-semibold">FREE AND FAST DELIVERY</h3>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-22 h-22 bg-neutral-300 flex justify-center items-center rounded-full">
          <div className="w-16 h-16 bg-accent-foreground rounded-full flex justify-center items-center">
            <Headphones className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-xl font-semibold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-22 h-22 bg-neutral-300 flex justify-center items-center rounded-full">
          <div className="w-16 h-16 bg-accent-foreground rounded-full flex justify-center items-center">
            <ShieldCheckIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-xl font-semibold">MONEY BACK GUARANTEE</h3>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
