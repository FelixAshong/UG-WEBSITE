"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownItem {
  label: string
  href: string
}

interface DropdownMenuProps {
  label: string
  items: DropdownItem[]
  className?: string
}

export function DropdownMenu({ label, items, className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={cn(
          "flex items-center text-white hover:text-[#b59a64] transition-colors duration-300",
          isOpen && "text-[#b59a64]",
          className,
        )}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-sm z-50 py-2"
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="block px-4 py-2 text-[#153d6f] hover:bg-gray-100 text-sm">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

