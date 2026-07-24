
import axios from "axios";

const API_URL = "http://localhost:5000/api/temples";

// Get all temples
export const getAllTemples = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get temple by ID
export const getTempleById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create temple
export const createTemple = async (templeData) => {
  const response = await axios.post(API_URL, templeData);
  return response.data;
};

// Update temple
export const updateTemple = async (id, templeData) => {
  const response = await axios.put(`${API_URL}/${id}`, templeData);
  return response.data;
};

// Delete temple
export const deleteTemple = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};