
import { motion } from "framer-motion";
import aboutBanner from "../assets/about/about-banner.jpg";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Image */}
      <img
        src={aboutBanner}
        alt="About DivyaDarshan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[8px] text-orange-400 font-semibold"
          >
            About DivyaDarshan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
          >
            Preserving India's
            <br />
            <span className="text-orange-500">
              Spiritual Heritage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-slate-300"
          >
            DivyaDarshan is a modern pilgrimage and temple information platform
            that helps devotees and travelers explore India's sacred temples,
            festivals, traditions, pilgrimage routes, and cultural heritage
            through one trusted destination.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;