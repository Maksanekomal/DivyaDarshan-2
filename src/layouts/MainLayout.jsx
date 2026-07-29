
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const MainLayout = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;