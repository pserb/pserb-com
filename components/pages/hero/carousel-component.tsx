'use client'

import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function CarouselComponent() {
  return (
    <Carousel
      opts={{ loop: true, watchDrag: false }}
        plugins={[Autoplay({ delay: 4000 })]}
    >
      <div className="absolute top-[70%] left-[10%] max-w-xs sm:max-w-md font-extrabold text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] z-10">
        <div className="relative flex flex-col">
          Stuy Schedule App
          <Button size={"lg"} className="max-w-48 mt-4 text-lg" variant={"secondary"}>learn more</Button>
        </div>
      </div>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-0 shadow-none bg-background dark:bg-background dark:shadow-none dark:border-0">
                <CardContent className="flex h-[99vh] items-start justify-center p-2">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  {/* <Image
                    src={"/app-page-portrait.png"}
                    fill
                    alt={"alt text"}
                    style={{ objectFit: 'contain' }}
                  /> */}
                  <img
                    className="brightness-[.60]"
                    src="/app-page-portrait.png"
                  ></img>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  )
}
