
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I search for a temple?",
    answer:
      "Use the search feature to find temples by name, deity, or state. You can also browse all temples from the Temples page.",
  },
  {
    question: "Is the temple information authentic?",
    answer:
      "We aim to provide accurate information from reliable sources. Always verify darshan timings with the official temple authorities before planning your visit.",
  },
  {
    question: "Can I plan a pilgrimage route?",
    answer:
      "Yes. The Routes section helps you explore popular pilgrimage circuits and travel suggestions across India.",
  },
  {
    question: "Is DivyaDarshan free to use?",
    answer:
      "Yes. DivyaDarshan is completely free and designed to help devotees and travelers explore India's spiritual heritage.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            FAQs
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-white text-lg font-semibold">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FaChevronUp className="text-orange-500" />
                ) : (
                  <FaChevronDown className="text-orange-500" />
                )}
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-400 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;