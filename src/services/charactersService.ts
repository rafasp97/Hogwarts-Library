import axios from "axios";
import { ICharacter } from "@/interface/Character.Interface";

const api = axios.create({
  baseURL: "https://hp-api.onrender.com/api",
  timeout: 5000,
});

export const CharactersService = {
  getAll: async (): Promise<ICharacter[]> => {
    const response = await api.get<any[]>("/characters");

    const characters: ICharacter[] = response.data.map((c) => ({
        id: c.id,
        name: c.name,
        dateOfBirth: c.dateOfBirth,
        house: c.house,
        patronus: c.patronus,
        image: c.image,
        actor: c.actor,
        alive: c.alive
    }));

    return characters;
  },
};