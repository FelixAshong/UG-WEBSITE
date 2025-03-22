"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface VideoBackgroundProps {
  videoSrc: string
  children: React.ReactNode
}

export default function VideoBackground({ videoSrc, children }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-[300px] w-full overflow-hidden">
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

