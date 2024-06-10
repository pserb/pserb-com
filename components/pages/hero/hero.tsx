'use client'

import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import Image from 'next/image'

export function Hero({
  link,
  heading,
  subheading,
}: {
  link: string
  heading: string
  subheading: string
}) {
  return (
    <div className="border-2 border-red-500 h-screen grid grid-rows-[14%_72%_14%]">
      <div className="border-2 border-blue-500 flex items-center justify-center">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl">{heading}</h2>
          <p className="text-center text-sm text-muted-foreground italic">
            {subheading}
          </p>
        </div>
      </div>
      <div className="border-2 border-green-500 relative flex items-center justify-center">
        <video
          className="absolute w-full h-full"
          style={{ objectFit: 'contain' }}
          autoPlay
          muted
          loop
          src="/stuy-schedule-screen-recording.mp4"
        ></video>
        {/* <Image
          src="/app-page-portrait.png"
          alt="stuy schedule ios app store page"
          fill
          style={{ objectFit: 'contain' }}
        /> */}
        {/* <img src="/app-page-portrait.png" style={{objectFit: "contain"}}></img> */}
      </div>
      <div className="border-2 border-blue-500 flex items-center justify-center">
        <span>
          <Button asChild variant="default">
            <Link href={link}>Learn More</Link>
          </Button>
        </span>
      </div>
    </div>
  )
}
