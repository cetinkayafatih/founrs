'use client'

import { useState, useRef, useId } from 'react'

import { cn } from '@/lib/cn'

interface TooltipProps {
  children: React.ReactNode
  content: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export function Tooltip({ 
  children, 
  content, 
  side = 'top',
  className 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const tooltipId = useId()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false)
    }, 100)
  }

  const handleFocus = () => {
    setIsVisible(true)
  }

  const handleBlur = () => {
    setIsVisible(false)
  }

  const getSideClasses = () => {
    switch (side) {
      case 'top':
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2'
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2'
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2'
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2'
      default:
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2'
    }
  }

  const getArrowClasses = () => {
    switch (side) {
      case 'top':
        return 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-fg'
      case 'bottom':
        return 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-fg'
      case 'left':
        return 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-fg'
      case 'right':
        return 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-fg'
      default:
        return 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-fg'
    }
  }

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby={isVisible ? tooltipId : undefined}
        tabIndex={0}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={cn(
            'absolute z-50 px-2 py-1 text-xs bg-fg text-bg rounded shadow-lg whitespace-nowrap pointer-events-none',
            'transition-opacity duration-200',
            getSideClasses(),
            className
          )}
        >
          {content}
          <div
            className={cn(
              'absolute w-0 h-0 border-4',
              getArrowClasses()
            )}
          />
        </div>
      )}
    </div>
  )
}