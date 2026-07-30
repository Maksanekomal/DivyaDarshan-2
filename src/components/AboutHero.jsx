
import { motion } from "framer-motion";
import aboutBanner from "../assets/about/about-banner.jpg";

const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-20">
      {/* Background Image */}
      <img
        src={aboutBanner}
        alt="About DivyaDarshan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/60 dark:from-slate-950/90 dark:via-slate-950/75 dark:to-slate-900/60 transition-all duration-300" />

      {/* Decorative Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 dark:bg-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-100/40 dark:bg-orange-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-6">
        <div className="max-w-5xl text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 font-semibold tracking-[4px] uppercase"
          >
            About DivyaDarshan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            Preserving India's
            <br />
            <span className="text-orange-600 dark:text-orange-400">
              Spiritual Heritage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-gray-700 dark:text-gray-300"
          >
            DivyaDarshan is a modern pilgrimage and temple discovery platform
            designed to help devotees and travelers explore India's sacred
            temples, vibrant festivals, spiritual traditions, and pilgrimage
            routes. Our mission is to preserve and promote India's rich cultural
            heritage through one trusted digital destination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                100+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sacred Temples
              </p>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                50+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Festivals
              </p>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                25+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pilgrimage Routes
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;