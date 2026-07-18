
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTempleById } from "../services/templeService";

import MainLayout from "../layouts/MainLayout";

import TempleHero from "../components/TempleHero";
import TempleQuickInfo from "../components/TempleQuickInfo";
import TempleHistory from "../components/TempleHistory";
import TempleFestivals from "../components/TempleFestivals";
import TempleTravel from "../components/TempleTravel";
import TempleNearby from "../components/TempleNearby";

const TempleDetails = () => {
  const { id } = useParams();

  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemple = async () => {
      try {
        const data = await getTempleById(id);
        setTemple(data);
      } catch (error) {
        console.error("Error fetching temple:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemple();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <h2 className="text-white text-2xl font-bold">
            Loading Temple...
          </h2>
        </div>
      </MainLayout>
    );
  }

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