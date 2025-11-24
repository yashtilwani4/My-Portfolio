"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let rafId: number

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Smooth ring follow with delay
      rafId = requestAnimationFrame(() => {
        setRingPosition(prev => ({
          x: prev.x + (e.clientX - prev.x) * 0.15,
          y: prev.y + (e.clientY - prev.y) * 0.15
        }))
      })

      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      const isClickable = target.closest('a, button, input, textarea, [role="button"]')
      setIsPointer(!!isClickable)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className={`w-10 h-10 rounded-full border-2 border-white transition-all duration-300 ${isPointer ? 'opacity-50' : 'opacity-100'}`} />
      </div>

      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0.5 : 1})`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white mix-blend-difference" />
      </div>

      {/* Glow Effect */}
      <div
        className="pointer-events-none fixed z-[9998] transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isPointer ? 0.3 : 0.15,
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 blur-3xl" />
      </div>
    </>
  )
}
