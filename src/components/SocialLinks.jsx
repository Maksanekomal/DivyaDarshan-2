
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
          Connect With Us
        </span>

        <h2 className="text-5xl font-bold text-white mt-4">
          Follow DivyaDarshan
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Stay connected for updates, new temple information, and future
          features.
        </p>

        <div className="flex justify-center gap-8 mt-12">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl text-white hover:bg-orange-600 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl text-white hover:bg-orange-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:support@divyadarshan.in"
            className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl text-white hover:bg-orange-600 transition"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </section>
  );
};

export default SocialLinks;