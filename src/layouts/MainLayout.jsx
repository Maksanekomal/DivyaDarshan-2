
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#020617] min-h-screen text-white">
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;