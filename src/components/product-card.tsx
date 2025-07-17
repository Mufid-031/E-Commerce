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
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-400 text-white px-2 rounded">
            {discount.toString().slice(2, 3)}0%
          </div>
        )}
        <div className="absolute top-2 right-2 space-y-2">
          <div className="p-1 bg-background rounded-full">
            <HeartIcon className="w-4 h-4" />
          </div>
          <div className="p-1 bg-background rounded-full">
            <EyeIcon className="w-4 h-4" />
          </div>
        </div>
        {image ? (
          <Image src={image} alt={name} width={200} height={200} />
        ) : (
          <ImageIcon className="w-8 h-8" />
        )}
      </div>
      <h4 className="font-semibold text-xs">{name}</h4>
      <p className="text-xs text-slate-400">
        {discount > 0 ? (
          <>
            <span className="text-red-400">${price - price * discount}</span>
            <span className="line-through text-slate-400 ml-2">${price}</span>
          </>
        ) : (
          <span className="text-red-400">${price}</span>
        )}
      </p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="w-4 h-4 text-yellow-400"
            fill={index + 1 <= ratings ? "currentColor" : "none"}
          />
        ))}
        <span className="text-xs text-slate-400 ml-2">({totalRatings})</span>
      </div>
    </div>
  );
};
