"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  items?: { label: string; href: string }[]
}

interface MainNavProps {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav ref={navRef} className="hidden md:flex space-x-6">
      {items.map((item) => (
        <div key={item.label} className="relative group">
          {item.items ? (
            <>
              <button
                className={cn(
                  "flex items-center text-[#153d6f] hover:text-[#b59a64] transition-colors duration-300 font-medium",
                  activeDropdown === item.label && "text-[#b59a64]",
                )}
                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                onMouseEnter={() => setActiveDropdown(item.label)}
              >
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === item.label && (
                <div
                  className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-sm z-50 py-2"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.items.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.href}
                      className="block px-4 py-2 text-[#153d6f] hover:bg-gray-100 text-sm"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className="text-[#153d6f] hover:text-[#b59a64] transition-colors duration-300 font-medium"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

