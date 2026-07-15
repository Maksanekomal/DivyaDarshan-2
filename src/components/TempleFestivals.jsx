
const TempleFestivals = ({ temple }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <h2 className="text-4xl font-bold text-white mb-10">
        Festivals & Rituals
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

          <h3 className="text-orange-500 text-2xl font-semibold mb-6">
            🎉 Major Festivals
          </h3>

          <div className="space-y-4">

            {temple.festivals.map((festival, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 text-gray-300"
              >
                {festival}
              </div>

            ))}

          </div>

        </div>

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

          <h3 className="text-orange-500 text-2xl font-semibold mb-6">
            🙏 Daily Rituals
          </h3>

          <div className="space-y-4">

            {temple.rituals.map((ritual, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 text-gray-300"
              >
                {ritual}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TempleFestivals;