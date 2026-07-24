
import axios from "axios";

const API_URL = "http://localhost:5000/api/contact";

// Get all contact messages
export const getAllContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data.contacts;
};

// Delete a contact message
export const deleteContact = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

// Send a contact message
export const createContact = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};