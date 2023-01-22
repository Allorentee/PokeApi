import { PokeInter } from "./../services/interface/apiInterface";
import { createContext } from "react";

const defaultValue: {
  pokemons: PokeInter[];
} = {
  pokemons: [],
};
export const PokemonContext = createContext(defaultValue);
