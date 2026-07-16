import MainLayout from "../layouts/MainLayout";
import PilgrimageRoutes from "../components/PilgrimageRoutes";

const PilgrimageRoutesPage = () => {
  return (
    <MainLayout>
      <div className="pt-24">
        <PilgrimageRoutes />
      </div>
    </MainLayout>
  );
};

export default PilgrimageRoutesPage;