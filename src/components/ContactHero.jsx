
import { motion } from "framer-motion";
import contactBanner from "../assets/contact/contact-banner.jpg";

const ContactHero = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden pt-20">
      {/* Background */}
      <img
        src={contactBanner}
        alt="Contact DivyaDarshan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/60 dark:from-slate-950/90 dark:via-slate-950/75 dark:to-slate-900/60 transition-all duration-300" />

      {/* Decorative Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 dark:bg-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-100/40 dark:bg-orange-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 uppercase tracking-[4px] font-semibold">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white leading-tight">
            We'd Love To
            <br />
            <span className="text-orange-600 dark:text-orange-400">
              Hear From You
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-gray-700 dark:text-gray-300">
            Have questions about temples, pilgrimage routes, festivals, or
            DivyaDarshan? Our team is always happy to help. Reach out to us,
            share your feedback, or ask for guidance on planning your spiritual
            journey.
          </p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                24/7
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Support
              </p>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                100+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Temple Guides
              </p>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Response Time
              </p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;