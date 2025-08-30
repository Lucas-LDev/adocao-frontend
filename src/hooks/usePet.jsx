import { useEffect, useState } from 'react';
import api from 'services/api';

export function usePet(petId) {
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (!petId) {
      setIsLoading(false);
      return;
    }
    setIsSlow(false);
    const timer = setTimeout(() => {
      setIsSlow(true);
    }, 10000);

    const fetchPet = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await api.get(`/pets/${petId}`);
        setPet(response.data);
      } catch (err) {
        console.error('Error captured: ', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPet();
    return () => clearTimeout(timer);
  }, [petId]);
  return {pet, isLoading, error, isSlow};
}
