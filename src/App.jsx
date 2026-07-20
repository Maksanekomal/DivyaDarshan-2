
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Temples from "./pages/Temples";
import TempleDetails from "./pages/TempleDetails";
import Festivals from "./pages/Festivals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PilgrimageRoutesPage from "./pages/PilgrimageRoutes";
import RouteDetails from "./pages/RouteDetails";
import FestivalDetails from "./pages/FestivalDetails";

import Dashboard from "./pages/Admin/Dashboard";
import AddTemple from "./pages/Admin/AddTemple";
import EditTemple from "./pages/Admin/EditTemple";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/temples" element={<Temples />} />
        <Route path="/temple/:id" element={<TempleDetails />} />

        <Route path="/festivals" element={<Festivals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/festival/:id" element={<FestivalDetails />} />
        <Route path="/routes" element={<PilgrimageRoutesPage />} />
        <Route path="/route/:id" element={<RouteDetails />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/add-temple" element={<AddTemple />} />
        <Route path="/admin/edit-temple/:id" element={<EditTemple />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;