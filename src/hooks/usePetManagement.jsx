import { useState, useEffect } from 'react';
import { petService } from 'services/petService';
import toast from 'react-hot-toast';

export const usePetManagement = (initialPets = []) => {
  const [pets, setPets] = useState(initialPets);

  useEffect(() => {
    setPets(initialPets);
  }, [initialPets]);

  const handleDeletePet = async (petId) => {
    if (!window.confirm('Você tem certeza que deseja remover este pet? (É irreversível.)')) return;
    try {
      await petService.deletePet(petId);
      setPets((currentPets) => currentPets.filter((pet) => pet.id !== petId));
      toast.success('Pet removido com sucesso!');
    } catch (err) {
      console.error('Erro ao remover pet:', err);
      toast.error('Erro ao remover o pet.');
    }
  };

  const handleToggleAvailability = async (petId) => {
    if (!window.confirm('Você tem certeza que deseja mudar o status deste pet?')) return;
    try {
      await petService.toggleAvailability(petId);
      setPets((currentPets) =>
        currentPets.map((pet) =>
          pet.id === petId ? { ...pet, isAvailable: !pet.isAvailable } : pet
        )
      );
      toast.success('Status do pet atualizado com sucesso.');
    } catch (err) {
      console.error('Erro ao atualizar o status do pet:', err);
      toast.error('Erro ao atualizar o status do pet.');
    }
  };

  return { pets, setPets, handleDeletePet, handleToggleAvailability };
};