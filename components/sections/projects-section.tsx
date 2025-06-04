"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time messaging platform with features like group chats, direct messages, file sharing, and read receipts.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management tool with boards, lists, cards, assignments, due dates, and activity tracking.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Vue.js", "NestJS", "TypeORM", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Event Streaming Platform",
      description:
        "A Kafka-based event streaming platform for processing high-volume data with real-time analytics and monitoring.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Kafka", "Spring Boot", "Elasticsearch", "Grafana", "Kubernetes"],
      githubUrl: "https://github.com",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(projects.length - 1)
    }
  }

  return (
    <section id="projects" className="container mx-auto py-24 bg-muted/30">
      <SectionHeading title="Projects" />

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="overflow-hidden border border-border hover:border-primary/50 transition-colors">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <Github className="h-4 w-4 mr-2" /> Code
                          </Button>
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2 items-center">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
