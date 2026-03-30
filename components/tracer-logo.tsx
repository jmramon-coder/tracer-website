"use client"

import { useEffect, useState } from "react"

interface TracerLogoProps {
  className?: string
  size?: number
  animated?: boolean
}

export function TracerLogo({ className = "", size = 32, animated = true }: TracerLogoProps) {
  const [pathProgress, setPathProgress] = useState(100)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Disable animation on mobile to prevent glitches
    if (!animated || isMobile) {
      setPathProgress(100)
      return
    }
    
    // Periodic re-trace animation every 4-7 seconds
    const scheduleNextTrace = () => {
      const delay = 4000 + Math.random() * 3000
      return setTimeout(() => {
        setPathProgress(0)
        
        // Animate the trace
        let progress = 0
        const animationInterval = setInterval(() => {
          progress += 3
          setPathProgress(progress)
          if (progress >= 100) {
            clearInterval(animationInterval)
            scheduleNextTrace()
          }
        }, 16)
      }, delay)
    }
    
    const timeout = scheduleNextTrace()
    return () => clearTimeout(timeout)
  }, [animated, isMobile])

  // 3/4 of a rounded square path - starts from bottom-right, goes up, left, down
  // Total path length is approximately 84 units
  const pathLength = 84
  const dashOffset = pathLength - (pathLength * pathProgress / 100)

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 3/4 rounded square trace path */}
        <path
          d="M24 26 L24 8 Q24 4 20 4 L12 4 Q8 4 8 8 L8 24 Q8 28 12 28 L18 28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray={pathLength}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke-dashoffset 0.05s linear' }}
        />
        
        {/* Arrow head at the end */}
        <path
          d="M16 24 L20 28 L16 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={`transition-opacity duration-200 ${pathProgress >= 90 ? 'opacity-100' : 'opacity-0'}`}
        />
      </svg>
    </div>
  )
}
