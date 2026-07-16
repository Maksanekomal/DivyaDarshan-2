
import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] min-h-screen">

        <ContactHero />

        <ContactInfo />

        <ContactForm />

        {/* Google Map */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white">
                Find Us
              </h2>

              <p className="text-gray-400 mt-4">
                Our location on Google Maps.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                width="100%"
                height="450"
                loading="lazy"
                className="border-0"
              ></iframe>

            </div>

          </div>
        </section>

        <FAQ />

        <SocialLinks />

      </div>
    </MainLayout>
  );
};

export default Contact;