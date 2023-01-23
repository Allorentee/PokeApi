import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import "./homePage.css";

export function HomePage() {
  const context = useContext(PokemonContext);
  const [indexNumber, setindexNumber] = useState(0);

  useEffect(() => {
    context.apiCall(indexNumber);
  }, []);
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
        disabled={indexNumber < 0}
        onClick={() => {
          setindexNumber(indexNumber - 20);
          context.apiCall(indexNumber);
        }}
      >
        Previus Page
      </button>
      <button
        onClick={() => {
          setindexNumber(indexNumber + 20);
          context.apiCall(indexNumber);
        }}
      >
        Next Page
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}
