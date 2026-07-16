
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Temples from "./pages/Temples";
import TempleDetails from "./pages/TempleDetails";
import Festivals from "./pages/Festivals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PilgrimageRoutesPage from "./pages/PilgrimageRoutes";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/temples" element={<Temples />} />

        <Route path="/festivals" element={<Festivals />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/routes" element={<PilgrimageRoutesPage />} />

        <Route
          path="/temple/:id"
          element={<TempleDetails />}
        />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;