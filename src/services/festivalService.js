
import axios from "axios";

const API_URL = "http://localhost:5000/api/festivals";

export const getAllFestivals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getFestivalById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
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