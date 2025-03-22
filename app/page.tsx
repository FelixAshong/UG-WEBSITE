"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/dropdown-menu"
import { MainNav } from "@/components/main-nav"
import HeroSlideshow from "@/components/hero-slideshow"
import VideoBackground from "@/components/video-background"
import NewsCard from "@/components/news-card"
import FeaturedLink from "@/components/featured-link"
import EventCard from "@/components/event-card"

// Top navigation items
const topNavItems = [
  {
    label: "Student",
    items: [
      { label: "STS Portal", href: "#" },
      { label: "Library", href: "#" },
      { label: "Sakai", href: "#" },
      { label: "Student Email", href: "#" },
      { label: "Academic Support and Services", href: "#" },
    ],
  },
  {
    label: "Alumni",
    items: [
      { label: "Alumni Portal", href: "#" },
      { label: "Alumni Association", href: "#" },
      { label: "Alumni Events", href: "#" },
    ],
  },
  {
    label: "Faculty & Staff",
    items: [
      { label: "Staff Email", href: "#" },
      { label: "STS Portal", href: "#" },
      { label: "HRODD", href: "#" },
    ],
  },
  {
    label: "MIS Web",
    items: [
      { label: "MIS Portal", href: "#" },
      { label: "IT Services", href: "#" },
    ],
  },
]

// Main navigation items
const mainNavItems = [
  {
    label: "About UG",
    href: "#",
    items: [
      { label: "Overview", href: "#" },
      { label: "History", href: "#" },
      { label: "Mission and Vision", href: "#" },
      { label: "Leadership & Directorates", href: "#" },
      { label: "Affiliates and Partners", href: "#" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    items: [
      { label: "Overview", href: "#" },
      { label: "Colleges", href: "#" },
      { label: "Programmes", href: "#" },
      { label: "Academic Calendar", href: "#" },
      { label: "Library", href: "#" },
      { label: "UG Journals", href: "#" },
    ],
  },
  {
    label: "Admissions",
    href: "#",
    items: [
      { label: "Overview", href: "#" },
      { label: "Undergraduate", href: "#" },
      { label: "Graduate", href: "#" },
      { label: "International Admissions", href: "#" },
      { label: "Distance & Continuing", href: "#" },
    ],
  },
  {
    label: "Research",
    href: "#",
    items: [
      { label: "Overview", href: "#" },
      { label: "Research Centers", href: "#" },
      { label: "Publications", href: "#" },
    ],
  },
  {
    label: "News",
    href: "#",
  },
  {
    label: "Student Life",
    href: "#",
  },
]

export default function Home() {
  const { scrollY } = useScroll()
  const headerRef = useRef<HTMLElement>(null)

  const headerBgOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const headerShadow = useTransform(scrollY, [0, 100], [0, 0.1])

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.classList.add("py-2")
          headerRef.current.classList.remove("py-3")
        } else {
          headerRef.current.classList.add("py-3")
          headerRef.current.classList.remove("py-2")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-[#153d6f] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-6">
            {topNavItems.map((item) => (
              <DropdownMenu key={item.label} label={item.label} items={item.items} />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm font-medium bg-[#b59a64] hover:bg-[#c9ad75] transition-colors duration-300 px-4 py-2 rounded"
            >
              GIVE TO UG
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="py-1 px-3 text-sm rounded text-black w-24 md:w-32 focus:outline-none focus:ring-2 focus:ring-[#b59a64] transition-all duration-300"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white py-3 px-4 transition-all duration-300"
        style={{
          boxShadow: headerShadow.get() ? `0 4px 6px rgba(0, 0, 0, ${headerShadow.get()})` : "none",
          backgroundColor: `rgba(255, 255, 255, ${headerBgOpacity.get()})`,
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-22%20at%209.51.33%E2%80%AFAM-54RT2Q6uHWFqylyaSj6JqWJTovkvW0.png"
              alt="University of Ghana Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="text-[#153d6f]">
              <h1 className="text-sm md:text-base font-bold">UNIVERSITY OF GHANA</h1>
            </div>
          </div>

          <MainNav items={mainNavItems} />

          <Button variant="ghost" size="icon" className="md:hidden text-[#153d6f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </motion.header>

      {/* Hero Section with Enhanced Slideshow */}
      <HeroSlideshow />

      {/* News Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-[#153d6f]"
            >
              News from UG
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <Link href="#" className="text-[#b59a64] text-sm hover:underline mr-4 group">
                Explore more news
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#b59a64]"></span>
              </Link>
              <Button className="bg-[#153d6f] hover:bg-[#0e2a4f] text-white h-8 px-3 py-0 text-xs">GO</Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NewsCard
              image="/images/news1.jpg"
              title="African Knowledge is Authentic and Must Be Recognised in Global Discourse – Prof. Amfo at Oregon Lecture"
              date="March 18, 2025"
              delay={0.1}
            />

            <div className="space-y-6">
              <NewsCard
                title="Vice-Chancellor Amfo Admonishes Innovators with Honorary Doctorate at 2023 Aggrey-Fraser-Guggisberg Memorial Lectures"
                date="March 16, 2025"
                delay={0.2}
              />

              <NewsCard
                title="2023 Aggrey-Fraser-Guggisberg Lecture: Challenges Researchers to Shift Narratives from Poverty to Innovation in Africa"
                date="March 14, 2025"
                delay={0.3}
              />

              <NewsCard
                title="College of Education Chancellor Scholars at Inaugural Ceremony"
                date="March 13, 2025"
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Plan Section */}
      <section className="relative h-[250px] w-full overflow-hidden">
        <Image src="/images/campus-building.jpg" alt="University Building" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              UG's New Strategic Plan (2024-2029) and Key Documents
            </h2>
            <p className="text-white text-sm mb-4">UG's New Strategic Plan (2024-2029) and Key Documents</p>
            <Button className="bg-[#b59a64] hover:bg-[#9a8354] text-white transition-all duration-300 transform hover:scale-105">
              Find Out More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Events and Announcements */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Upcoming Events */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-[#153d6f]"
                >
                  Upcoming Events
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href="#" className="text-[#b59a64] text-xs hover:underline flex items-center group">
                    View all events
                    <ChevronRight className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>

              <EventCard
                date={{ month: "APR", day: "27" }}
                title="Inaugural Lecture by Prof. Maria Ana Borges Soares"
                venue="Great Hall"
                delay={0.2}
              />
            </div>

            {/* Announcements */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-[#153d6f]"
                >
                  Announcements
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href="#" className="text-[#b59a64] text-xs hover:underline group">
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      Explore more announcements
                    </span>
                  </Link>
                </motion.div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Post-Doctoral Engagement Guide",
                    date: "March 12, 2025",
                    delay: 0.2,
                  },
                  {
                    title:
                      "University of Nairobi - Sasakawa Foundation of Ghana Endowment Fund Award For The 2023/2024 Academic Awards Prize",
                    date: "March 8, 2025",
                    delay: 0.3,
                  },
                  {
                    title: "Extension of Diploma in Diploma (DIP) programme by UGBS & Corona Graduate Institute",
                    date: "February 28, 2025",
                    delay: 0.4,
                  },
                  {
                    title:
                      "Call for Applications - TDR Postgraduate Scholarship in Implementation Research (2022-2026)",
                    date: "February 24, 2025",
                    delay: 0.5,
                  },
                ].map((announcement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: announcement.delay }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-sm font-bold text-[#153d6f] hover:text-[#b59a64] transition-colors duration-300">
                      <Link href="#">{announcement.title}</Link>
                    </h3>
                    <p className="text-xs text-gray-500">{announcement.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Featured Links */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-[#153d6f] mb-6"
              >
                Featured Links
              </motion.h2>

              <div className="space-y-2">
                {[
                  "Amnesty Registration",
                  "University Policies and Strategic Documents",
                  "Course Lecturer Evaluation",
                  "Join the UG Alumni Network",
                  "University Student Organization Initiative",
                  "Vacancy Announcement",
                  "Schedule of Fees",
                  "Academic Calendar",
                ].map((link, index) => (
                  <FeaturedLink key={index} title={link} href="#" index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section with Video Background */}
      <VideoBackground videoSrc="/videos/campus-life.mp4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white text-lg max-w-2xl mx-auto"
        >
          We invite you to be part of our vibrant university community. A warm welcome awaits you as we prepare you to
          discover and harness your full potential.
        </motion.p>
      </VideoBackground>

      {/* Footer */}
      <footer className="bg-[#153d6f] text-white pt-12 pb-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <Image
                src="/images/ug-logo-white.png"
                alt="University of Ghana Logo"
                width={150}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-xs uppercase mb-1 flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> P.O. BOX LG 25
              </p>
              <p className="text-xs uppercase mb-1">LEGON, ACCRA</p>
              <p className="text-xs uppercase mb-1 flex items-center">
                <Phone className="h-3 w-3 mr-1" /> +233 302 213820
              </p>
              <p className="text-xs uppercase flex items-center">
                <Mail className="h-3 w-3 mr-1" /> pad@ug.edu.gh
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#b59a64] font-bold mb-4">COLLEGES</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Basic and Applied Sciences
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Health Sciences
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Humanities
                    </Link>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#b59a64] font-bold mb-4">QUICK LINKS</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Academic Support and Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Procurement Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Public Affairs Directorate (PAD)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Employment Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Library
                    </Link>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#b59a64] font-bold mb-4">GIVE TO UG</h3>
                <div className="flex space-x-2 mb-4">
                  <Link href="#" className="social-icon text-white hover:text-[#b59a64]">
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="social-icon text-white hover:text-[#b59a64]">
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="social-icon text-white hover:text-[#b59a64]">
                    <Youtube className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="social-icon text-white hover:text-[#b59a64]">
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="social-icon text-white hover:text-[#b59a64]">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#b59a64] font-bold mb-4">ADMISSIONS</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Undergraduate
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Graduate
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      International
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Distance Education
                    </Link>
                  </li>
                </ul>

                <h3 className="text-[#b59a64] font-bold mt-6 mb-4">ALUMNI</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Alumni Relations Office
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Alumni Association (Ghana)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                      Alumni Association (North America)
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-4 text-xs text-center"
          >
            <p>Copyright © {new Date().getFullYear()}, University of Ghana</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                All Rights Reserved
              </Link>
              <span>|</span>
              <Link href="#" className="hover:underline hover:text-[#b59a64] transition-colors duration-300">
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

