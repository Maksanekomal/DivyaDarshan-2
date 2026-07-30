
import MainLayout from "../layouts/MainLayout";

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedTemples from "../components/FeaturedTemples";
import PilgrimageRoutes from "../components/PilgrimageRoutes";
import FestivalHighlights from "../components/FestivalHighlights";

const Home = () => {
  return (
    <MainLayout>

      {/* Hero Section */}
      <Hero />

      {/* Website Statistics */}
      <Stats />

      {/* Featured Temples */}
      <FeaturedTemples />

      {/* Pilgrimage Routes */}
      <PilgrimageRoutes />

      {/* Festival Highlights */}
      <FestivalHighlights />

    </MainLayout>
  );
};

export default Home;