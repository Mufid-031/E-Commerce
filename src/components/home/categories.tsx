import {
  Camera,
  Gamepad,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";
import { Section } from "../section";

export const Categories = () => {
  const items = [
    {
      name: "Phones",
      icon: <Smartphone />,
    },
    {
      name: "Computers",
      icon: <Monitor />,
    },
    {
      name: "SmartWatch",
      icon: <Watch />,
    },
    {
      name: "Camera",
      icon: <Camera />,
    },
    {
      name: "Headphones",
      icon: <Headphones />,
    },
    {
      name: "Gaming",
      icon: <Gamepad />,
    },
  ];

  return (
    <Section title="Categories" description="Browse By Category">
      <div className="flex items-center gap-5">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center gap-2 w-36 h-40 border border-slate-400 rounded-lg flex-1 hover:bg-red-400 hover:text-white cursor-pointer"
          >
            {item.icon}
            <span className="text-sm font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};
