
import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <MainLayout>

      <div
        className="
          min-h-screen
          bg-gray-50
          dark:bg-slate-950
          transition-colors
          duration-300
        "
      >

        <ContactHero />


        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-20
            space-y-24
          "
        >

          <ContactInfo />


          <ContactForm />


          {/* Google Map */}

          <section>

            <div className="text-center mb-12">


              <span
                className="
                  inline-block
                  px-5
                  py-2
                  rounded-full
                  bg-orange-100
                  dark:bg-orange-500/20
                  text-orange-600
                  dark:text-orange-400
                  font-semibold
                  uppercase
                  tracking-[4px]
                "
              >
                Location
              </span>


              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  mt-6
                "
              >
                Find Us
              </h2>


              <p
                className="
                  text-gray-600
                  dark:text-gray-400
                  mt-5
                  max-w-2xl
                  mx-auto
                  text-lg
                "
              >
                Visit us or explore our location on Google Maps to plan your
                journey.
              </p>


            </div>



            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                dark:border-slate-700
                shadow-xl
                dark:shadow-black/30
              "
            >

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                className="border-0 w-full"
              />

            </div>


          </section>



          <FAQ />


          <SocialLinks />


        </div>

      </div>


    </MainLayout>
  );
};

export default Contact;