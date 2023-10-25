import axios from 'axios';

// Register a new user
const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login an existing user
const loginUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
