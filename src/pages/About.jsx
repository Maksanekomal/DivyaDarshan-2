
import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectStats from "../components/ProjectStats";
import DeveloperSection from "../components/DeveloperSection";

const About = () => {
  return (
    <MainLayout>

      <div className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] min-h-screen">

        <AboutHero />

        <MissionVision />
        <WhyChooseUs />
        <ProjectStats />
        <DeveloperSection />

      </div>

    </MainLayout>
  );
};

export default About;