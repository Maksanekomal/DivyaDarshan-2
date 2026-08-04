
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/routes`;

export const getAllRoutes = async () => {
  const { data } = await axios.get(API);
  return data;
};