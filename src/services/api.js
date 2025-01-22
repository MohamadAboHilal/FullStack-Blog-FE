import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL; // make .env file in root folder and put this line inside: VITE_BASE_URL=http://localhost:3000/api/v1

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
