"use client"

import { createContext, useContext, useState, useEffect, useRef } from "react"

type CursorState = "default" | "button" | "link" | "click"

interface CursorContextType {
  cursorState: CursorState
  setCursorState: (state: CursorState) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorState: "default",
  setCursorState: () => {},
})

export const useCursor = () => useContext(CursorContext)

interface Trail {
  x: number
  y: number
  opacity: number
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>("default")
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [trails, setTrails] = useState<Trail[]>([])
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const trailsRef = useRef<Trail[]>([])

  useEffect(() => {
    let rafId: number
    let trailInterval: NodeJS.Timeout

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Smooth ring follow with delay
      rafId = requestAnimationFrame(() => {
        setRingPosition(prev => ({
          x: prev.x + (e.clientX - prev.x) * 0.12,
          y: prev.y + (e.clientY - prev.y) * 0.12
        }))
      })

      // Check element type
      const target = e.target as HTMLElement
      const isButton = target.closest('button, [role="button"]')
      const isLink = target.closest('a')
      
      if (isButton) {
        setCursorState("button")
      } else if (isLink) {
        setCursorState("link")
      } else {
        setCursorState("default")
      }
    }

    const handleClick = (e: MouseEvent) => {
      setCursorState("click")
      const id = Date.now()
      setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id }])
      
      setTimeout(() => {
        setCursorState("default")
        setRipples(prev => prev.filter(r => r.id !== id))
      }, 600)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Trail effect
    trailInterval = setInterval(() => {
      if (isVisible) {
        trailsRef.current = [
          { x: position.x, y: position.y, opacity: 0.6 },
          ...trailsRef.current.slice(0, 8)
        ].map((trail, i) => ({
          ...trail,
          opacity: trail.opacity * 0.85
        }))
        setTrails([...trailsRef.current])
      }
    }, 50)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("click", handleClick)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("click", handleClick)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (rafId) cancelAnimationFrame(rafId)
      clearInterval(trailInterval)
    }
  }, [position.x, position.y, isVisible])

  if (!isVisible) return <CursorContext.Provider value={{ cursorState, setCursorState }}>{children}</CursorContext.Provider>

  const getScale = () => {
    switch (cursorState) {
      case "button": return 1.8
      case "link": return 1.4
      case "click": return 0.8
      default: return 1
    }
  }

  const getDotScale = () => {
    switch (cursorState) {
      case "button": return 0.3
      case "link": return 0.5
      case "click": return 2
      default: return 1
    }
  }

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState }}>
      {children}

      {/* Light Trails */}
      {trails.map((trail, i) => (
        <div
          key={i}
          className="pointer-events-none fixed z-[9997]"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: trail.opacity,
          }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 blur-sm" />
        </div>
      ))}

      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed z-[9998] animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
            animationDuration: '600ms',
          }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-purple-500" />
        </div>
      ))}

      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed z-[9999] transition-all duration-200 ease-out"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${getScale()})`,
        }}
      >
        <div 
          className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
            cursorState === "button" 
              ? "border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]" 
              : cursorState === "link"
              ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              : "border-white/50 mix-blend-difference"
          }`} 
        />
      </div>

      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-[9999] transition-all duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${getDotScale()})`,
        }}
      >
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-150 ${
            cursorState === "button" || cursorState === "link"
              ? "bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500"
              : "bg-white mix-blend-difference"
          }`} 
        />
      </div>

      {/* Glow Effect */}
      <div
        className="pointer-events-none fixed z-[9998] transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: cursorState === "button" ? 0.4 : cursorState === "link" ? 0.3 : 0.15,
        }}
      >
        <div 
          className={`rounded-full blur-3xl transition-all duration-300 ${
            cursorState === "button"
              ? "w-40 h-40 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500"
              : cursorState === "link"
              ? "w-32 h-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
              : "w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500"
          }`} 
        />
      </div>

      {/* Link Underline Effect */}
      {cursorState === "link" && (
        <div
          className="pointer-events-none fixed z-[9998] transition-all duration-200"
          style={{
            left: `${position.x}px`,
            top: `${position.y + 20}px`,
            transform: 'translate(-50%, 0)',
          }}
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
      )}
    </CursorContext.Provider>
  )
}
