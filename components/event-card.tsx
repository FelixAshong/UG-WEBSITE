"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface EventCardProps {
  date: {
    month: string
    day: string
  }
  title: string
  venue: string
  delay?: number
}

export default function EventCard({ date, title, venue, delay = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300"
    >
      <div className="text-center bg-gray-100 p-2 rounded-lg shadow-sm">
        <div className="text-xs text-gray-500">{date.month}</div>
        <div className="text-2xl font-bold text-[#153d6f]">{date.day}</div>
      </div>
      <div>
        <h3 className="text-sm font-bold text-[#153d6f] hover:text-[#b59a64] transition-colors duration-300">
          <Link href="#">{title}</Link>
        </h3>
        <p className="text-xs text-gray-500">Venue: {venue}</p>
      </div>
    </motion.div>
  )
}

