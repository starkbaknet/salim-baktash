import Header from "@/components/header";
import Hero from "@/components/hero";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import EducationSection from "@/components/sections/education-section";
// import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
