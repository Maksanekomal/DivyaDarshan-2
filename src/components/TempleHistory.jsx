import { motion } from "framer-motion";

const TempleHistory = ({ temple }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-white mb-8">
          Temple Heritage
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

            <h3 className="text-orange-500 text-2xl font-semibold mb-5">
              📜 History
            </h3>

            <p className="text-gray-300 leading-8">
              {temple.history}
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

            <h3 className="text-orange-500 text-2xl font-semibold mb-5">
              ✨ Significance
            </h3>

            <p className="text-gray-300 leading-8">
              {temple.significance}
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

            <h3 className="text-orange-500 text-2xl font-semibold mb-5">
              🏛 Architecture
            </h3>

            <p className="text-gray-300 leading-8">
              {temple.architecture}
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default TempleHistory;