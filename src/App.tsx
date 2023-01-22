import "./App.css";
import { PokemonProvider } from "./context/pokemonProvider";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <>
      <PokemonProvider>
        <HomePage></HomePage>
      </PokemonProvider>
    </>
  );
}

export default App;
