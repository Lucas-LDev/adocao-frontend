import api from './api';

const createPet = async (data) => {
  const response = await api.post('/pets', data);
  return response.data;
};

const deletePet = async (petId) => {
  await api.delete(`/pets/${petId}`);
}

const updatePet = async (petId, data) => {
  const response = await api.put(`/pets/${petId}`, data);
  return response.data;
}

export const petService = {
  createPet, deletePet, updatePet,
};