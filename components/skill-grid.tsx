"use client";
import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  icon: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "language"
    | "ai"
    | "other";
}

export default function SkillGrid() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skills: Skill[] = [
    // Languages
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      category: "language",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
      category: "language",
    },
    { name: "Python", icon: "/python.svg", category: "language" },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
      category: "language",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
      category: "language",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
      category: "language",
    },
    {
      name: "Go",
      icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
      category: "language",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png",
      category: "language",
    },
    {
      name: "Rust",
      icon: "http://rust-lang.org/logos/rust-logo-512x512.png",
      category: "language",
    },
    {
      name: "Dart",
      icon: "https://www.cdnlogo.com/logos/d/66/dart.svg",
      category: "language",
    },

    // Frontend
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      category: "frontend",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      category: "frontend",
    },
    {
      name: "React.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      category: "frontend",
    },
    {
      name: "Next.js",
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      category: "frontend",
    },
    {
      name: "Bootstrap",
      icon: "https://webapps1.chicago.gov/cdn/Bootstrap-4.0.0-beta.2/assets/brand/bootstrap-social-logo.png",
      category: "frontend",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      category: "frontend",
    },
    {
      name: "MaterialUI",
      icon: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png",
      category: "frontend",
    },
    {
      name: "MantineUI",
      icon: "https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png",
      category: "frontend",
    },
    {
      name: "DaisyUI",
      icon: "https://img.jsdelivr.com/raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png",
      category: "frontend",
    },
    {
      name: "React Native",
      icon: "https://www.cdnlogo.com/logos/r/18/react-native.svg",
      category: "frontend",
    },
    {
      name: "Flutter",
      icon: "https://icon.icepanel.io/Technology/svg/Flutter.svg",
      category: "frontend",
    },
    {
      name: "ShadCN",
      icon: "https://ui.shadcn.com/favicon.ico",
      category: "frontend",
    },
    {
      name: "Electron.js",
      icon: "https://icon.icepanel.io/Technology/svg/Electron.svg",
      category: "frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
      category: "backend",
    },
    {
      name: "Nest.js",
      icon: "https://nestjs.com/logo-small-gradient.d792062c.svg",
      category: "backend",
    },
    {
      name: "FastAPI",
      icon: "https://www.cdnlogo.com/logos/f/59/fastapi.svg",
      category: "backend",
    },
    {
      name: "Django",
      icon: "https://www.cdnlogo.com/logos/d/3/django.svg",
      category: "backend",
    },
    {
      name: "Flask",
      icon: "https://www.cdnlogo.com/logos/f/50/flask.svg",
      category: "backend",
    },
    {
      name: "Spring Boot",
      icon: "https://icon.icepanel.io/Technology/svg/Spring.svg",
      category: "backend",
    },

    // Database
    {
      name: "MongoDB",
      icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
      category: "database",
    },
    {
      name: "PostgreSQL",
      icon: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
      category: "database",
    },
    {
      name: "MySQL",
      icon: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
      category: "database",
    },
    {
      name: "SQLite3",
      icon: "https://icon.icepanel.io/Technology/png-shadow-512/SQLite.png",
      category: "database",
    },
    {
      name: "Redis",
      icon: "https://icon.icepanel.io/Technology/svg/Redis.svg",
      category: "database",
    },
    {
      name: "Oracle",
      icon: "https://icon.icepanel.io/Technology/svg/Oracle.svg",
      category: "database",
    },
    {
      name: "ClickHouse",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Clickhouse.png",
      category: "database",
    },

    // DevOps & Cloud
    {
      name: "Docker",
      icon: "https://icon.icepanel.io/Technology/svg/Docker.svg",
      category: "devops",
    },
    {
      name: "Podman",
      icon: "https://icon.icepanel.io/Technology/svg/Podman.svg",
      category: "devops",
    },
    {
      name: "Kubernetes",
      icon: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
      category: "devops",
    },
    {
      name: "Terraform",
      icon: "/terraform.svg",
      category: "devops",
    },
    {
      name: "HashiCorp Vault",
      icon: "/vault.svg",
      category: "devops",
    },
    {
      name: "AWS",
      icon: "https://icon.icepanel.io/Technology/svg/AWS.svg",
      category: "devops",
    },
    {
      name: "GCP",
      icon: "https://icon.icepanel.io/Technology/svg/Google-Cloud.svg",
      category: "devops",
    },
    {
      name: "Firebase",
      icon: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
      category: "devops",
    },
    {
      name: "SupaBase",
      icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
      category: "devops",
    },
    {
      name: "Git",
      icon: "https://icon.icepanel.io/Technology/svg/Git.svg",
      category: "devops",
    },
    {
      name: "GitHub",
      icon: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
      category: "devops",
    },
    {
      name: "GitLab",
      icon: "https://icon.icepanel.io/Technology/svg/GitLab.svg",
      category: "devops",
    },
    {
      name: "Linux",
      icon: "https://icon.icepanel.io/Technology/png-shadow-512/Linux.png",
      category: "devops",
    },
    {
      name: "Kafka",
      icon: "https://icon.icepanel.io/Technology/svg/Apache-Kafka.svg",
      category: "devops",
    },

    // AI & Data Science
    {
      name: "Jupyter",
      icon: "https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png",
      category: "ai",
    },
    {
      name: "NumPy",
      icon: "https://icon.icepanel.io/Technology/svg/NumPy.svg",
      category: "ai",
    },
    {
      name: "Pandas",
      icon: "https://icon.icepanel.io/Technology/png-shadow-512/Pandas.png",
      category: "ai",
    },
    {
      name: "Matplotlib",
      icon: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
      category: "ai",
    },
    {
      name: "PyTorch",
      icon: "https://icon.icepanel.io/Technology/svg/PyTorch.svg",
      category: "ai",
    },
    {
      name: "TensorFlow",
      icon: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg",
      category: "ai",
    },
    {
      name: "Scikit-learn",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      category: "ai",
    },
    {
      name: "Keras",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      category: "ai",
    },
    {
      name: "OpenCV",
      icon: "https://opencv.org/wp-content/uploads/2022/05/logo.png",
      category: "ai",
    },
    {
      name: "Seaborn",
      icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      category: "ai",
    },
    {
      name: "Plotly",
      icon: "https://images.plot.ly/logo/new-branding/plotly-logomark.png",
      category: "ai",
    },
    {
      name: "NLTK",
      icon: "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png",
      category: "ai",
    },
    { name: "spaCy", icon: "SpaCy_logo.svg.png", category: "ai" },
    {
      name: "Hugging Face",
      icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      category: "ai",
    },
  ];

  const categories = [
    { id: null, name: "All" },
    { id: "language", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps" },
    { id: "ai", name: "AI & Data Science" },
  ];

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id || "all"}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div
              className={`transition-transform duration-300 ${
                hoveredSkill === skill.name ? "scale-110" : "scale-100"
              }`}
            >
              <div className="relative w-10 h-10 bg-background rounded-md overflow-hidden">
                <Image
                  src={skill.icon || "/placeholder.png"}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  sizes="40px"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.png?height=40&width=40";
                  }}
                />
              </div>
            </div>
            <p className="mt-3 text-sm font-medium">{skill.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
