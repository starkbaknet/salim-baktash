"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  logo: string;
}

export default function EducationSection() {
  const education: EducationItem[] = [
    {
      institution: "Azad Khan High School",
      degree: "High School Degree",
      duration: "2011 - 2022",
      description:
        "Completed a High School Degree at Azad Khan High School from 2011 to 2022, gaining a strong foundation in academic studies and personal development.",
      logo: "/school.svg", // Example logo
    },
    {
      institution: "Self Study",
      degree: "Programming and Development",
      duration: "2016 - Present",
      description:
        "Engaged in self-study in Programming and Development since 2016, continuously learning and enhancing skills in coding, software development, and problem-solving.",
      logo: "/home.svg", // Example logo
    },
  ];

  return (
    <section id="education" className="container mx-auto py-24">
      <SectionHeading title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="p-6 border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 rounded-md overflow-hidden border border-border bg-background">
                  <Image
                    src={edu.logo || "/placeholder.png"}
                    alt={`${edu.institution} logo`}
                    fill
                    className="object-cover"
                    sizes="48px"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.png?height=48&width=48";
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.duration}
                  </p>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
