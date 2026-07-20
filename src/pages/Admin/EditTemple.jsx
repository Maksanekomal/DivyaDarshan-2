
import { useParams } from "react-router-dom";

const EditTemple = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        Edit Temple {id}
      </h1>
    </div>
  );
};

export default EditTemple;