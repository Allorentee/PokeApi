import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import Header from "../../shared/header/Header";
import { Pagination } from "./components/Pagination";
import "./homePage.css";

export function HomePage() {
  const { pokemons } = useContext(PokemonContext);

  return (
    <>
      <Header></Header>
      <main>
        <ul>
          {pokemons.map((pkm) => (
            <li key={pkm.id}>
              <p className="pokemon__id">{`#0${pkm.id}`}</p>
              <img
                src={pkm.sprites.front_default}
                alt="tal"
                width={100}
                height={100}
              />
              <p>{pkm.name}</p>
            </li>
          ))}
        </ul>
      </main>
      <Pagination></Pagination>
    </>
  );
}
