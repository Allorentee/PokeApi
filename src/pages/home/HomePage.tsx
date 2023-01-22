import { useContext, useState } from "react";
import { PokemonContext } from "../../context/pokemonContext";

export function HomePage() {
  const context = useContext(PokemonContext);
  const [count, setCount] = useState(0);
  return (
    <>
      {context.pokemons.map((pkm) => (
        <div key={pkm.id}>
          <p>{pkm.name}</p>
          <img src={pkm.sprites.front_default} alt="tal" width={100} />
        </div>
      ))}
      <button
        onClick={() => {
          setCount(count + 20);
          context.apiCall(count);
        }}
      >
        Next Page
      </button>
    </>
  );
}
