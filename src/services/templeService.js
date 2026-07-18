
import api from "./api";

// Get all temples
export const getAllTemples = async () => {
  const response = await api.get("/temples");
  return response.data;
};

// Get temple by ID
export const getTempleById = async (id) => {
  const response = await api.get(`/temples/${id}`);
  return response.data;
};