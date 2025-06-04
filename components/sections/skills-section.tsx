import SectionHeading from "@/components/ui/section-heading";
import SkillGrid from "@/components/skill-grid";

export default function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto py-24">
      <SectionHeading title="Skills" />
      <SkillGrid />
    </section>
  );
}
