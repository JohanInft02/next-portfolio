import ProfileSection from "@/components/profile/page";
import WelcomeSection from "@/components/welcome/page";
import AchievementSection from "@/components/achievement/page";
import WorkExperiencesSection from "@/components/work-experiences/page";
import EducationSection from "@/components/education/page";
import TechnicalSkillsSection from "@/components/technical-skills/page";
import ProjectsSection from "@/components/projects/page";
import ContactSection from "@/components/contact/page";
import ResumeSection from "@/components/resume/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto p-4 pt-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
          <div className="md:col-span-3 md:row-span-4">
            <ProfileSection />
          </div>
          <div className="md:col-span-9">
            <WelcomeSection />
          </div>

          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
            <AchievementSection />
            <WorkExperiencesSection />
            <EducationSection />
          </div>

          <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <TechnicalSkillsSection />
            </div>
            <div className="md:col-span-6">
              <ProjectsSection />
            </div>
            <div className="md:col-span-4">
              <ContactSection />
            </div>
            <div className="md:col-span-8">
              <ResumeSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
