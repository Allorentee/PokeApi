import { useEffect, useState } from "react";
import { PokeInter, APIResponse } from "../services/interface/apiInterface";
import { PokemonContext } from "./pokemonContext";

export const PokemonProvider = ({ children }: { children: JSX.Element }) => {
  const initialState: PokeInter[] = [];
  const [pokemons, setPokemons] = useState(initialState);

  //! TRAEMOS LOS DATOS DE LOS POKEMONS.
  const apiCall = async (num: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${num}&limit=20`
    );
    const data: APIResponse = await response.json();

    //! CREAR UN ARRAY DE PROMESAS
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const result = await Promise.all(promises);
    setPokemons(result);
    return undefined;
  };

  useEffect(() => {
    apiCall(0);
  }, []);

  const context = {
    pokemons,
    apiCall,
  };

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
};
