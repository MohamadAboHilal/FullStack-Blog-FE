import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL; // make .env file in root folder and put this line inside: VITE_BASE_URL=http://localhost:3000/api/v1

const api = axios.create({ baseURL: VITE_BASE_URL });

export const fetchPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post(`/posts`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, postData) => {
  try {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
