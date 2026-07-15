
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import temples from "../data/temples";

import TempleHero from "../components/TempleHero";
import TempleQuickInfo from "../components/TempleQuickInfo";
import TempleHistory from "../components/TempleHistory";
import TempleFestivals from "../components/TempleFestivals";
import TempleTravel from "../components/TempleTravel";
import TempleNearby from "../components/TempleNearby";

const TempleDetails = () => {
  const { id } = useParams();

  const temple = temples.find((item) => item.id === Number(id));

  if (!temple) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <h1 className="text-5xl font-bold text-white">
            Temple Not Found
          </h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827]">

        <TempleHero temple={temple} />

        <TempleQuickInfo temple={temple} />

        <TempleHistory temple={temple} />

        <TempleFestivals temple={temple} />

        <TempleTravel temple={temple} />

        <TempleNearby temple={temple} />

      </div>

    </MainLayout>
  );
};

export default TempleDetails;