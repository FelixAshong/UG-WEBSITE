"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface FeaturedLinkProps {
  title: string
  href: string
  index: number
}

export default function FeaturedLink({ title, href, index }: FeaturedLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="featured-link flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 text-[#153d6f]"
      >
        <span className="text-sm">{title}</span>
        <ChevronRight className="h-4 w-4 text-[#b59a64]" />
      </Link>
    </motion.div>
  )
}

