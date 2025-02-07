"use client"

import { Card } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { useEffect, useRef } from "react"

const skills = [
  "skill-icons:html",
  "skill-icons:css",
  "skill-icons:javascript",
  "skill-icons:typescript",
  "skill-icons:react-dark",
  "skill-icons:nextjs-dark",
  "skill-icons:nodejs-dark",
  "skill-icons:python-dark",
  "skill-icons:docker",
  "skill-icons:aws-dark",
  "skill-icons:git",
  "skill-icons:github-dark",
  "skill-icons:mongodb",
  "skill-icons:postgresql-dark",
  "skill-icons:tailwindcss-dark",
]

export default function ContactSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      const scrollWidth = carousel.scrollWidth

      let scrollPosition = 0
      const scroll = () => {
        scrollPosition += 1
        if (scrollPosition > scrollWidth / 2) {
          scrollPosition = 0
        }
        carousel.scrollLeft = scrollPosition
        requestAnimationFrame(scroll)
      }

      requestAnimationFrame(scroll)
    }
  }, [])

  return (
    <Card className="col-span-6 row-span-2 overflow-hidden relative theme-transition">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-purple-600"></div>
      <div className="relative h-full p-6 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4 theme-transition">
          🛠️ Código, datos y DevOps: ¡Mi arsenal tech en acción!
        </h3>
        <div ref={carouselRef} className="flex overflow-hidden">
          <div className="flex animate-slide">
            {[...skills, ...skills].map((skill, index) => (
              <Icon key={index} icon={skill} className="w-12 h-12 mx-4 flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

