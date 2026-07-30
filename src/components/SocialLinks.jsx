
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    href: "mailto:support@divyadarshan.in",
  },
];

const SocialLinks = () => {
  return (
    <section
      className="
        py-20
        bg-gradient-to-b
        from-white
        via-orange-50
        to-white

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950

        transition-colors
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full

              bg-orange-100
              dark:bg-orange-500/10

              text-orange-600
              dark:text-orange-400

              font-semibold
              uppercase
              tracking-[4px]
            "
          >
            Connect With Us
          </span>


          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold

              text-gray-900
              dark:text-white

              mt-6
              transition-colors
            "
          >
            Follow DivyaDarshan
          </h2>


          <p
            className="
              text-gray-600
              dark:text-gray-300

              mt-6
              max-w-2xl
              mx-auto
              text-lg
              leading-8
            "
          >
            Stay connected for the latest temple updates, festivals,
            pilgrimage guides, and exciting new features.
          </p>

        </div>


        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-8 mt-14">

          {socialLinks.map((social, index) => (

            <motion.a
              key={index}
              href={social.href}
              target={
                social.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              whileHover={{
                y: -8,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group flex flex-col items-center"
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-full

                  bg-white
                  dark:bg-slate-800

                  border
                  border-gray-200
                  dark:border-slate-700

                  shadow-lg
                  dark:shadow-black/30

                  flex
                  items-center
                  justify-center

                  text-3xl

                  text-orange-600
                  dark:text-orange-400

                  group-hover:bg-orange-600
                  group-hover:text-white

                  group-hover:shadow-2xl

                  transition-all
                  duration-300
                "
              >
                {social.icon}
              </div>


              <span
                className="
                  mt-4

                  text-gray-700
                  dark:text-gray-200

                  font-semibold

                  group-hover:text-orange-600
                  dark:group-hover:text-orange-400

                  transition-colors
                "
              >
                {social.title}
              </span>

            </motion.a>

          ))}

        </div>

      </div>
    </section>
  );
};

export default SocialLinks;