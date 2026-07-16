
import { motion } from "framer-motion";

import missionImage from "../assets/about/mission.jpg";
import visionImage from "../assets/about/vision.jpg";

const MissionVision = () => {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Our Purpose
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Mission & Vision
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            DivyaDarshan is dedicated to preserving India's spiritual heritage
            while making temple information easily accessible through modern
            technology.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Mission Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl"
          >

            <img
              src={missionImage}
              alt="Mission"
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-orange-500 mb-5">
                Our Mission
              </h3>

              <p className="text-gray-300 leading-8">
                To create a reliable digital platform where devotees,
                pilgrims, and travelers can discover authentic information
                about India's temples, festivals, rituals, and pilgrimage
                routes. We aim to preserve cultural heritage while making
                spiritual journeys easier and more meaningful.
              </p>

            </div>

          </motion.div>

          {/* Vision Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl"
          >

            <img
              src={visionImage}
              alt="Vision"
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-orange-500 mb-5">
                Our Vision
              </h3>

              <p className="text-gray-300 leading-8">
                To become India's most trusted temple and pilgrimage portal by
                combining technology with spirituality. Our vision is to help
                every visitor explore India's sacred destinations through one
                comprehensive, user-friendly platform.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;