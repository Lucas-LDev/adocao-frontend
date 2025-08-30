import { useState, useEffect } from 'react';
import api from "services/api";

export function usePets(filters = {}) {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSlow, setIsSlow] = useState(false);
  const params = new URLSearchParams(filters).toString();

  useEffect(() => {
    setIsSlow(false);
    const timer = setTimeout(() => {
      setIsSlow(true);
    }, 10000);
    
    const fetchPets = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const reponse = await api.get(`/pets?${params}`);
        setPets(reponse.data);
      } catch (err) {
        console.error("Error captured: ", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPets();
    return () => clearTimeout(timer);
  }, [params]);
  return {pets, isLoading, error, isSlow, setPets};
}