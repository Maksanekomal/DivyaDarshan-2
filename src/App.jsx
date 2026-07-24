
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Temples from "./pages/Temples";
import TempleDetails from "./pages/TempleDetails";
import Festivals from "./pages/Festivals";
import FestivalDetails from "./pages/FestivalDetails";
import PilgrimageRoutesPage from "./pages/PilgrimageRoutes";
import RouteDetails from "./pages/RouteDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import AddTemple from "./pages/Admin/AddTemple";
import EditTemple from "./pages/Admin/EditTemple";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminRegister from "./pages/Admin/AdminRegister";
import ContactMessages from "./pages/Admin/ContactMessages";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

import ManageFestivals from "./pages/Admin/ManageFestivals";
import AddFestival from "./pages/Admin/AddFestival";
import EditFestival from "./pages/Admin/EditFestival";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/temples" element={<Temples />} />
        <Route path="/temple/:id" element={<TempleDetails />} />

        <Route path="/festivals" element={<Festivals />} />
        <Route path="/festival/:id" element={<FestivalDetails />} />

        <Route path="/routes" element={<PilgrimageRoutesPage />} />
        <Route path="/route/:id" element={<RouteDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Protected Admin Routes */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-temple"
          element={
            <ProtectedRoute>
              <AddTemple />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-temple/:id"
          element={
            <ProtectedRoute>
              <EditTemple />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <ContactMessages />
            </ProtectedRoute>
          }
        />

        <Route
  path="/admin/manage-festivals"
  element={
    <ProtectedRoute>
      <ManageFestivals />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/add-festival"
  element={
    <ProtectedRoute>
      <AddFestival />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/edit-festival/:id"
  element={
    <ProtectedRoute>
      <EditFestival />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;