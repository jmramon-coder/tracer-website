"use client"

import Image from "next/image"

interface MapleLeafProps {
  className?: string
  size?: number
}

export function MapleLeaf({ className = "", size = 14 }: MapleLeafProps) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SDWu7KD4zlZI5yn5VOMs4gOqRFU8fJ.png"
      alt="Canadian maple leaf"
      width={size}
      height={size}
      className={className}
    />
  )
}
