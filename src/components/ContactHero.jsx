
import { motion } from "framer-motion";
import contactBanner from "../assets/contact/contact-banner.jpg";

const ContactHero = () => {
  return (
    <section className="relative h-[65vh] overflow-hidden">

      <img
        src={contactBanner}
        alt="Contact DivyaDarshan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[6px] text-orange-400 font-semibold">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
            We'd Love To
            <span className="text-orange-500"> Hear From You</span>
          </h1>

          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-8">
            Have questions about temples, pilgrimage routes or festivals?
            Get in touch with us and we'll be happy to assist you.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactHero;