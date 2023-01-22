import { APIResponse } from "./interface/apiInterface";

export const getAllPokemons = async (): Promise<APIResponse> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  return response.json();
};
