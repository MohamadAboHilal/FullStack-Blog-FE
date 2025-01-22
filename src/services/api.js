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

/**
 * Create a new post.
 * @param {Object} postData - The data for the new post.
 * @param {string} postData.author - Author of the post.
 * @param {string} postData.title - Title of the post.
 * @param {string} postData.content - Content of the post.
 * @param {string} postData.cover - Cover image URL of the post.
 * @returns {Promise<Object>} - The response data from the server.
 */
export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${VITE_BASE_URL}/posts`, postData);
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error so it can be handled by the calling code
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
