
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can I search for a temple?",
    answer:
      "Use the search feature to find temples by name, deity, or state. You can also browse all temples from the Temples page.",
  },
  {
    question: "Is the temple information authentic?",
    answer:
      "We strive to provide accurate information from reliable sources. However, we recommend verifying darshan timings and special events with the official temple authorities before planning your visit.",
  },
  {
    question: "Can I plan a pilgrimage route?",
    answer:
      "Yes. Visit the Routes section to explore popular pilgrimage circuits, travel guidance, and suggested itineraries across India.",
  },
  {
    question: "Is DivyaDarshan free to use?",
    answer:
      "Yes. DivyaDarshan is completely free and is designed to help devotees and travelers explore India's spiritual heritage.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="
            inline-block px-5 py-2 rounded-full 
            bg-orange-100 dark:bg-orange-500/20
            text-orange-600 dark:text-orange-400
            font-semibold uppercase tracking-[4px]
          ">
            FAQs
          </span>


          <h2 className="
            text-4xl md:text-5xl font-bold 
            text-gray-900 dark:text-white
            mt-6
          ">
            Frequently Asked Questions
          </h2>


          <p className="
            mt-5 text-lg 
            text-gray-600 dark:text-gray-400
            max-w-2xl mx-auto
          ">
            Find quick answers to the most common questions about
            DivyaDarshan, temples, festivals, and pilgrimage planning.
          </p>

        </div>


        {/* FAQ Items */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              layout
              className="
                bg-white dark:bg-slate-900
                rounded-2xl
                border border-gray-200 dark:border-slate-700
                shadow-md dark:shadow-black/30
                hover:shadow-lg
                transition-all duration-300
              "
            >


              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="
                  w-full flex justify-between 
                  items-center p-6 text-left
                "
              >

                <h3 className="
                  text-lg md:text-xl font-semibold
                  text-gray-900 dark:text-white
                  pr-4
                ">
                  {faq.question}
                </h3>


                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    w-10 h-10 rounded-full
                    bg-orange-100 dark:bg-orange-500/20
                    flex items-center justify-center
                    text-orange-600 dark:text-orange-400
                    flex-shrink-0
                  "
                >
                  <FaChevronDown />
                </motion.div>


              </button>


              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="
                      px-6 pb-6
                      text-gray-600 dark:text-gray-400
                      leading-8
                      border-t border-gray-100 dark:border-slate-700
                      pt-5
                    ">
                      {faq.answer}
                    </div>


                  </motion.div>

                )}

              </AnimatePresence>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;