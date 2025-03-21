"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Search,
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: "/placeholder.svg?height=500&width=1920&text=Campus+Main",
      alt: "University Campus Main Building",
    },
    {
      image: "/placeholder.svg?height=500&width=1920&text=Campus+Library",
      alt: "University Library",
    },
    {
      image: "/placeholder.svg?height=500&width=1920&text=Campus+Students",
      alt: "Students on Campus",
    },
  ]

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#153d6f] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-4 text-sm">
            <Link href="#" className="hover:underline">
              Students
            </Link>
            <Link href="#" className="hover:underline">
              Faculty & Staff
            </Link>
            <Link href="#" className="hover:underline">
              Alumni
            </Link>
            <Link href="#" className="hover:underline">
              Visitors
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm hover:underline">
              Apply
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Give
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-4 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="University of Ghana Logo"
              width={60}
              height={60}
              className="h-15"
            />
            <div className="text-[#153d6f]">
              <h1 className="text-xl md:text-2xl font-bold">UNIVERSITY OF GHANA</h1>
              <p className="text-xs md:text-sm">Integri Procedamus</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6 font-medium">
                <li>
                  <Link href="#" className="text-[#153d6f] hover:text-[#b59a64]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#153d6f] hover:text-[#b59a64]">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#153d6f] hover:text-[#b59a64]">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#153d6f] hover:text-[#b59a64]">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#153d6f] hover:text-[#b59a64]">
                    Campus Life
                  </Link>
                </li>
              </ul>
            </nav>
            <Button variant="ghost" size="icon" className="text-[#153d6f]">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-[#153d6f]">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section with Slideshow */}
      <section className="relative h-[500px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover brightness-75"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Welcome to University of Ghana</h2>
          <p className="text-xl md:text-2xl text-center mb-8">Ghana's Premier University of Excellence</p>
          <div className="flex space-x-4">
            <Button className="bg-[#b59a64] hover:bg-[#9a8354] text-white">Apply Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#153d6f]">
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Slideshow indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#b59a64]" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* News and Announcements */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#153d6f]">News & Announcements</h2>
            <Link href="#" className="text-[#b59a64] hover:underline flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=News+${item}`}
                  alt={`News ${item}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm text-gray-500">March 15, 2025</span>
                  <h3 className="text-xl font-semibold my-2 text-[#153d6f]">
                    University Announces New Research Initiative
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The University of Ghana has launched a groundbreaking research program focused on sustainable
                    development and climate change adaptation.
                  </p>
                  <Link href="#" className="text-[#b59a64] hover:underline font-medium">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#153d6f] mb-8 text-center">Quick Links</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Academic Calendar", icon: "calendar" },
              { title: "Library Resources", icon: "book" },
              { title: "Student Portal", icon: "users" },
              { title: "Campus Map", icon: "map" },
              { title: "Courses & Programs", icon: "graduation-cap" },
              { title: "Research Publications", icon: "file-text" },
              { title: "Career Services", icon: "briefcase" },
              { title: "International Programs", icon: "globe" },
            ].map((link, index) => (
              <Link
                href="#"
                key={index}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#153d6f] text-white flex items-center justify-center mb-3">
                  <Image
                    src={`/placeholder.svg?height=40&width=40&text=${link.icon}`}
                    alt={link.icon}
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-center font-medium text-[#153d6f]">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 px-4 bg-[#153d6f] text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Arts & Humanities",
              "Business & Economics",
              "Science & Technology",
              "Social Sciences",
              "Health Sciences",
              "Law",
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{program}</h3>
                <p className="text-white/80 mb-4">
                  Discover our diverse range of undergraduate and graduate programs in {program.toLowerCase()}.
                </p>
                <Link href="#" className="text-[#b59a64] hover:underline flex items-center">
                  Explore Programs <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#153d6f] mb-4">Campus Life</h2>
              <p className="text-gray-600 mb-6">
                The University of Ghana offers a vibrant campus experience with numerous opportunities for personal and
                professional growth. From student clubs and organizations to cultural events and sports activities,
                there's something for everyone.
              </p>
              <p className="text-gray-600 mb-6">
                Our beautiful campus provides state-of-the-art facilities, comfortable accommodation, and a supportive
                community that fosters academic excellence and holistic development.
              </p>
              <Button className="bg-[#b59a64] hover:bg-[#9a8354] text-white">Discover Campus Life</Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=250&width=250&text=Campus+1"
                alt="Campus Life"
                width={250}
                height={250}
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="/placeholder.svg?height=250&width=250&text=Campus+2"
                alt="Campus Life"
                width={250}
                height={250}
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="/placeholder.svg?height=250&width=250&text=Campus+3"
                alt="Campus Life"
                width={250}
                height={250}
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="/placeholder.svg?height=250&width=250&text=Campus+4"
                alt="Campus Life"
                width={250}
                height={250}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Postgraduate Announcement Banner */}
      <section className="py-8 px-4 bg-[#b59a64] text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">Postgraduate Programme Applications Opened</h2>
          </div>
          <Link
            href="#"
            className="flex items-center space-x-2 bg-white text-[#153d6f] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            <span>Click here for more details</span>
            <div className="w-8 h-8 rounded-full border-2 border-[#153d6f] flex items-center justify-center">
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#153d6f] text-white pt-12 pb-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                  <span>P.O. Box LG 25, Legon, Accra, Ghana</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+233 302 213820</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@ug.edu.gh</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    About UG
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Research
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Staff Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    E-Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    News & Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="hover:text-[#b59a64]">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-[#b59a64]">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-[#b59a64]">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-[#b59a64]">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-md text-black w-full" />
                <Button className="bg-[#b59a64] hover:bg-[#9a8354] rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} University of Ghana. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Terms of Use
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

