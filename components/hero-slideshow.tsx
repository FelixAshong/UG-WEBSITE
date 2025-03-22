"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/images/campus-main.jpg",
    alt: "University Campus Main Building",
  },
  {
    id: 2,
    image: "/images/campus-library.jpg",
    alt: "University Library",
  },
  {
    id: 3,
    image: "/images/campus-students.jpg",
    alt: "Students on Campus",
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].alt}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#153d6f]/60">
        <div className="container mx-auto h-full flex flex-col justify-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            POST-GRADUATE
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            PROGRAMME
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            APPLICATIONS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-[#b59a64]/90 text-white rounded-full py-2 px-4 inline-flex items-center space-x-2 max-w-md"
          >
            <Circle className="h-3 w-3 fill-white text-white mr-2" />
            <span className="font-medium">Postgraduate Programme Applications Opened</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-2 ml-8"
          >
            <Link href="#" className="text-white text-sm flex items-center hover:underline group">
              Click here for more details
              <div className="ml-2 w-5 h-5 rounded-full bg-white flex items-center justify-center group-hover:bg-[#b59a64] transition-colors duration-300">
                <ArrowRight className="h-3 w-3 text-[#153d6f] group-hover:text-white transition-colors duration-300" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#b59a64] w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

