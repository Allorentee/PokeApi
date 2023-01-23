import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import { Pagination } from "./components/Pagination";
import "./homePage.css";

export function HomePage() {
  const { pokemons } = useContext(PokemonContext);

  return (
    <>
      {pokemons.map((pkm) => (
        <div key={pkm.id}>
          <p>{pkm.name}</p>
          <img src={pkm.sprites.front_default} alt="tal" width={100} />
        </div>
      ))}
      <Pagination></Pagination>
    </>
  );
}
