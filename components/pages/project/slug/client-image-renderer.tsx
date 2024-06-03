'use client' // This directive makes the component a Client Component

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

type image = {
  src: string
  hyperlink?: string
  alt: string
  height?: string
}

function ClientRenderImage({ image }: {image: image}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(false)

  const handleLoad = (event: {
    currentTarget: { setAttribute: (arg0: string, arg1: string) => void }
  }) => {
    setIsLoaded(true)
    event.currentTarget.setAttribute('data-loaded', 'true')
    setShowSkeleton(false)
  }

  const timeBeforeSkeletonRender = 100 // in ms

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setShowSkeleton(true)
      }
    }, timeBeforeSkeletonRender)

    return () => clearTimeout(timer)
  }, [isLoaded])

  return (
    <div className="relative" style={{ height: image.height + 'px' }}>
      <a href={image.hyperlink}>
        {showSkeleton && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ height: image.height + 'px' }}
          >
            <Skeleton className="w-1/2 h-full" />
          </div>
        )}
        <Image
          src={image.src}
          fill
          alt={image.alt}
          style={{ objectFit: 'contain' }}
          onLoad={handleLoad}
          className={`z-10 ${isLoaded && showSkeleton ? 'transition-opacity duration-500 opacity-100' : ''}`}
        />
      </a>
    </div>
  )
}

export default ClientRenderImage
