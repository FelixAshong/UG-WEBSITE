"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface NewsCardProps {
  image?: string
  title: string
  date: string
  delay?: number
}

export default function NewsCard({ image, title, date, delay = 0 }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="news-item"
    >
      {image && (
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
      )}
      <div className={`${image ? "mt-4" : "border-b pb-4"}`}>
        <h3
          className={`${image ? "text-lg" : "text-base"} font-bold my-2 text-[#153d6f] hover:text-[#b59a64] transition-colors duration-300`}
        >
          <Link href="#">{title}</Link>
        </h3>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
    </motion.div>
  )
}

