import { EyeIcon, HeartIcon, ImageIcon, Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  discount: number;
  ratings: number;
  totalRatings: number;
}

export const ProductCard = ({
  name,
  image,
  price,
  discount,
  ratings,
  totalRatings,
}: ProductCardProps) => {
  return (
    <div className="w-60 h-80 flex flex-col gap-2 flex-1">
      <div className="w-full h-40 bg-slate-300 flex justify-center items-center relative">
        <div className="absolute top-2 right-2">
          <HeartIcon />
          <EyeIcon />
        </div>
        {image ? (
          <Image src={image} alt={name} width={200} height={200} />
        ) : (
          <ImageIcon className="w-8 h-8" />
        )}
      </div>
      <h4 className="font-semibold text-xs">{name}</h4>
      <p className="text-xs text-slate-400">
        <span className="text-red-400">${discount}</span>
        <span className="line-through text-slate-400 ml-2">${price}</span>
      </p>
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.floor(ratings) }).map((_, index) => (
          <Star
            key={index}
            className="w-4 h-4 text-yellow-400"
            fill={index < Math.floor(ratings) ? "currentColor" : "none"}
          />
        ))}
        <span className="text-xs text-slate-400 ml-2">({totalRatings})</span>
      </div>
    </div>
  );
};
