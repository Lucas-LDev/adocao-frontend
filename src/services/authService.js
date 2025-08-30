import api from "./api";

const login = async (loginData) => {
  const response = await api.post('/auth/login', loginData);
  return response.data;
};

export const authService = {
  login
};