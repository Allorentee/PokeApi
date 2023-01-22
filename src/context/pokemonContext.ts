import { PokeInter } from "./../services/interface/apiInterface";
import { createContext } from "react";

const defaultValue: {
  pokemons: PokeInter[];
  apiCall: (num: number) => void;
} = {
  pokemons: [],
  apiCall: (num: number) => undefined,
};
export const PokemonContext = createContext(defaultValue);
