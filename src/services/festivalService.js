
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/festivals`;

export const getAllFestivals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getFestivalById = async (id) => {
  try {
    console.log("Fetching Festival:", `${API_URL}/${id}`);

    const response = await axios.get(`${API_URL}/${id}`);

    console.log("Festival Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Festival API Error:", error.response?.data || error.message);
    throw error;
  }
};

export const createFestival = async (festival) => {
  const response = await axios.post(API_URL, festival);
  return response.data;
};

export const updateFestival = async (id, festival) => {
  const response = await axios.put(`${API_URL}/${id}`, festival);
  return response.data;
};

export const deleteFestival = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};