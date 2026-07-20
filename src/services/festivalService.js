
import axios from "axios";

const API_URL = "http://localhost:5000/api/festivals";

// Get all festivals
export const getAllFestivals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get festival by ID
export const getFestivalById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};