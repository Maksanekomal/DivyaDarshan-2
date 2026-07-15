
import {
  FaClock,
  FaCalendarAlt,
  FaTshirt,
  FaTicketAlt,
} from "react-icons/fa";

const TempleQuickInfo = ({ temple }) => {

  const info = [

    {
      icon: <FaClock />,
      title: "Darshan",
      value: temple.darshanTiming,
    },

    {
      icon: <FaCalendarAlt />,
      title: "Best Time",
      value: temple.bestTimeToVisit,
    },

    {
      icon: <FaTshirt />,
      title: "Dress Code",
      value: temple.dressCode,
    },

    {
      icon: <FaTicketAlt />,
      title: "Entry Fee",
      value: temple.entryFee,
    },

  ];

  return (

    <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {info.map((item, index) => (

          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg"
          >

            <div className="text-3xl text-orange-500">

              {item.icon}

            </div>

            <h3 className="mt-5 font-semibold text-white text-lg">

              {item.title}

            </h3>

            <p className="text-gray-400 mt-2">

              {item.value}

            </p>

          </div>

        ))}

      </div>

    </section>

  );
};

export default TempleQuickInfo;