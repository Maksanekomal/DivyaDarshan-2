
import { motion } from "framer-motion";
import aboutBanner from "../assets/about/about-banner.jpg";

const AboutHero = () => {
  return (
    <section className="relative h-[75vh] overflow-hidden">

      {/* Background Image */}
      <img
        src={aboutBanner}
        alt="About DivyaDarshan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[6px] text-orange-400 font-semibold">
            About DivyaDarshan
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-6">
            Preserving India's
            <br />
            <span className="text-orange-500">
              Spiritual Heritage
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
            DivyaDarshan is a modern pilgrimage and temple information platform
            that helps devotees and travelers explore India's sacred temples,
            festivals, traditions, and pilgrimage routes from one trusted place.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutHero;