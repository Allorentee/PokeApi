import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";

export function HomePage() {
  const context = useContext(PokemonContext);
  const pokemons = context.pokemons;
  return (
    <>
      {pokemons.map((pkm) => (
        <div key={pkm.id}>
          <p>{pkm.name}</p>
          <img src={pkm.sprites.front_default} alt="tal" />
        </div>
      ))}
    </>
  );
}
