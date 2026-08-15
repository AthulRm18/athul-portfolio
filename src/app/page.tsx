import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorkSection } from "@/components/work/WorkSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import { PageTransition } from "@/components/layout/PageTransition";
import { MobileNav } from "@/components/layout/MobileNav";

export default function HomePage() {
  return (
    <PageTransition>
      <Header />
      <MobileNav />
      <main className="pb-24 sm:pb-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AboutSection />
        </div>
        
        <WorkSection />
        
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SkillsSection />
          <ContactSection />
          
          <div className="w-full flex items-center justify-center py-16 md:py-32 relative text-white">
            <FluidGradientText text="Athul R Mohan" />
          </div>

          <Footer />
        </div>
      </main>
    </PageTransition>
  );
}
