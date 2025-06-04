import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="container mx-auto pt-32 pb-24 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hello<span className="text-primary">.</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            I'm <span className="text-primary">Salim Baktash</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            A passionate developer focused on creating innovative solutions to
            solve real-world problems. Currently specializing in web and mobile
            application development with expertise in both frontend and backend
            technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-md">
              <Download className="mr-2 h-4 w-4" />{" "}
              <Link href="/resume.pdf" target="_blank">
                Download Resume
              </Link>
            </Button>
            <Button variant="outline" className="rounded-md">
              <Link href="#contact">Contact Me</Link>{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex mt-8 space-x-4">
            <Link
              href="https://github.com/starkbaknet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/StarkBakTec?t=LkhI8Ia-lewG7-_sZASoVA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohammad-salim-8453a729b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:bak.stark06@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-border">
              <Image
                src="/avatar.png"
                alt="Salim Baktash"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
