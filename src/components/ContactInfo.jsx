
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import contactImage from "../assets/contact/contact-info.jpg";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Pune, Maharashtra, India",
    link: "https://www.google.com/maps/search/?api=1&query=Pune,Maharashtra,India",
  },
  {
    icon: <FaPhoneAlt />,
    title: "+91 98765 43210",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "support@divyadarshan.in",
    link: "mailto:support@divyadarshan.in",
  },
  {
    icon: <FaClock />,
    title: "Support Hours",
    value: "Mon - Sat | 9:00 AM - 6:00 PM",
    link: null,
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-[560px] object-cover rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-orange-100 dark:border-slate-700 px-6 py-4">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                We're Here
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Happy to assist you anytime.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 uppercase tracking-[4px] font-semibold">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 leading-tight">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-6 leading-8 text-lg">
              Whether you're planning a pilgrimage, looking for temple
              information, or have suggestions to improve DivyaDarshan,
              our team is always ready to help and guide you.
            </p>

            <div className="grid gap-6 mt-10">

              {contactDetails.map((item, index) => {
                const Wrapper = item.link ? "a" : "div";

                return (
                  <Wrapper
                    key={index}
                    href={item.link || undefined}
                    target={item.title === "Location" ? "_blank" : undefined}
                    rel={
                      item.title === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="group flex items-center gap-5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-500 transition-all"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/40 group-hover:bg-orange-600 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:text-white text-2xl transition-all duration-300">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  </Wrapper>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;