"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

interface ExperienceItem {
  logo: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      logo: "/netlinks3.png",
      company: "Netlinks Inc",
      position: "Backend Developer",
      duration: "Oct 2024 - Present",
      responsibilities: [
        "Built scalable backend services",
        "Worked with cloud technologies",
        "Integrated third-party APIs",
      ],
    },
    {
      logo: "/listoli.png",
      company: "Listoli LLC",
      position: "Full Stack Developer",
      duration: "Jan 2024 - Jun 2024",
      responsibilities: [
        "Developed interactive UI components",
        "Worked on performance optimizations",
        "Built scalable backend services",
        "Worked with cloud technologies",
        "Integrated third-party APIs",
      ],
    },
    /*{
      logo: "/mocai.png",
      company: "Ministry of Culture and Information",
      position: "Full Stack Developer",
      duration: "Jun 2023 - Dec 2023",
      responsibilities: [
        "Developed interactive UI components",
        "Worked on performance optimizations",
        "Collaborated with designers and backend engineers",
        "Built scalable backend services",
        "Integrated third-party APIs",
      ],
    },*/
    {
      logo: "/ttt.jpg",
      company: "Top In Town Technology",
      position: "Software Development Instructor",
      duration: "2021 - 2023 and Jun 2024 - Oct 2024",
      responsibilities: [
        "Designed and delivered software development courses to students",
        "Provided hands-on training in programming languages and frameworks",
        "Mentored students on best coding practices and problem-solving techniques",
        "Developed instructional materials and coding exercises",
        "Assessed student progress and provided constructive feedback",
        "Guided students in building real-world projects to enhance practical skills",
      ],
    },
  ];

  return (
    <section id="experience" className="container mx-auto py-24 bg-muted/30">
      <SectionHeading title="Experience" />
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="p-6 border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 rounded-md overflow-hidden border border-border bg-background">
                  <Image
                    src={exp.logo || "/placeholder.png"}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-cover"
                    sizes="64px"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.png?height=64&width=64";
                    }}
                  />
                </div>
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
