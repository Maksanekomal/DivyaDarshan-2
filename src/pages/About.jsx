
import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectStats from "../components/ProjectStats";
import DeveloperSection from "../components/DeveloperSection";

const About = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

        <AboutHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          <MissionVision />
          <WhyChooseUs />
          <ProjectStats />
          <DeveloperSection />
        </div>

      </div>
    </MainLayout>
  );
};

export default About;