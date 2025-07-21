import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, ShoppingCartIcon, Trash2Icon } from "lucide-react";

export default function Wishlist() {

    
  return (
    <div className="my-10 px-20">
      <div className="flex justify-between items-center w-full h-10 mb-10">
        <h3 className="text-xl">Wishlist (4)</h3>
        <Button variant="outline" className="py-5 px-8">
          Move All To Bag
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((index) => (
          <Card
            key={index}
            className="py-0 overflow-hidden border-none gap-0 rounded-none"
          >
            <div className="w-full h-[250px] bg-muted-foreground relative flex justify-center items-center">
              <div className="absolute top-3 left-3 right-3 flex justify-between">
                <Badge className="bg-red-400 px-2 rounded text-white">
                  -35%
                </Badge>
                <Badge className="bg-white rounded-full py-2">
                  <Trash2Icon className="w-6 h-6 text-black" />
                </Badge>
              </div>
              <ImageIcon className="w-8 h-8 text-white" />
            </div>
            <div className="w-full h-14 flex justify-center items-center gap-2 bg-accent-foreground text-white">
              <ShoppingCartIcon className="w-6 h-6" />
              Add To Cart
            </div>
            <div className="flex flex-col gap-4 p-3">
              <h3 className="text-lg">Gucci duffle bag</h3>
              <div className="flex items-center gap-3">
                <p className="text-red-400">$960</p>
                <p className="line-through text-muted-foreground">$1160</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
