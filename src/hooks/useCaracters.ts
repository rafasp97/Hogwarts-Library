import { useState, useEffect } from "react";
import { CharactersService } from "@/services/charactersService";
import { ICharacter } from "@/interface/Character.Interface";

export function useCharacters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCharacters = async () => {
      try {
        const data = await CharactersService.getAll();
        if (isMounted) setCharacters(data);
      } catch (err: any) {
        if (isMounted) setError(err.message || "Erro ao buscar personagens");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCharacters();

    return () => {
      isMounted = false;
    };
  }, []);

  return { characters, loading, error };
}