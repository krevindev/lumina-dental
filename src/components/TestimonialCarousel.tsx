"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import images from "@/constants/images";

export default function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="max-w-[90vw] sm:max-w-xs max-h-[30vh] min-h-fit">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        {/* <h1>Testimonials</h1> */}
        <CarouselContent className="max-w-[80vw]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="m-px rounded-br-[50px]">
                <CardContent className="flex flex-col items-center justify-center p-6 text-[#6591DE]">
                  <p className="text-[#6591DE] italic">
                    “Lumina Dental made my visit easy and comfortable, with
                    staff who explained everything clearly.”
                  </p>
                  <h4 className="font-bold mt-5 text-xl">Mark Anthony Reyes</h4>
                  <div className="grid grid-cols-5 gap-1 mt-3">
                    <img src={images.starFilled} />
                    <img src={images.starFilled} />
                    <img src={images.starFilled} />
                    <img src={images.starFilled} />
                    <img src={images.starFilled} />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-5" />
        <CarouselNext className="size-5" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm flex justify-center items-center">
        {/* Slide {current} of {count} */}
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx + 1)}
            className={`border-white border rounded-full size-2 m-1 mt-5 ${idx + 1 === current ? "bg-white" : "bg-transparent"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
