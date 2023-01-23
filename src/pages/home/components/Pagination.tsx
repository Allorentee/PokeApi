import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../context/pokemonContext";

export const Pagination = () => {
  const [indexNumber, setIndexNumber] = useState(0);
  const { apiCall } = useContext(PokemonContext);

  useEffect(() => {
    apiCall(indexNumber);
  }, [indexNumber]);

  return (
    <>
      <div className="pagination">
        <button
          disabled={indexNumber <= 0}
          onClick={() => {
            setIndexNumber(indexNumber - 20);
          }}
        >
          Previus Page
        </button>
        <button
          onClick={() => {
            setIndexNumber(indexNumber + 20);
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
};
