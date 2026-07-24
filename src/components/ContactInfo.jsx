
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
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
    title: "Phone",
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src={contactImage}
              alt="Contact"
              className="rounded-3xl shadow-2xl object-cover w-full h-[550px]"
            />
          </div>

          {/* Details */}
          <div>

            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Get In Touch
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Whether you're planning a pilgrimage, looking for temple
              information, or have suggestions for improving DivyaDarshan,
              we're here to help.
            </p>

            <div className="grid gap-6 mt-10">

              {contactDetails.map((item, index) => {
                const CardWrapper = item.link ? "a" : "div";

                return (
                  <CardWrapper
                    key={index}
                    href={item.link || undefined}
                    target={item.title === "Location" ? "_blank" : undefined}
                    rel={item.title === "Location" ? "noreferrer" : undefined}
                    className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-orange-500 transition cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-xl bg-orange-600 flex items-center justify-center text-white text-xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-gray-400">
                        {item.value}
                      </p>
                    </div>
                  </CardWrapper>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;