import { Pokemons } from "./interface/apiInterface";

export const getAllPokemons = async (): Promise<Pokemons> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await response.json();
  return results;
};
