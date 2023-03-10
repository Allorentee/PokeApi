import { useEffect, useState } from "react";
import { PokeInter, APIResponse } from "../services/interface/apiInterface";
import { PokemonContext } from "./pokemonContext";

export const PokemonProvider = ({ children }: { children: JSX.Element }) => {
  const initialState: PokeInter[] = [];
  const [pokemons, setPokemons] = useState(initialState);

  //! TRAEMOS LOS DATOS DE LOS POKEMONS.
  const apiCall = async (num: number = 0) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${num}&limit=20`
    );
    const data: APIResponse = await response.json();

    //! CREAR UN ARRAY DE PROMESAS
    const promises = data.results.map((pokemon) => {
      return fetch(pokemon.url)
        .then((res) => res.json())
        .then((data) => data);
    });

    const result = await Promise.all(promises);
    setPokemons(result);
    return undefined;
  };
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
