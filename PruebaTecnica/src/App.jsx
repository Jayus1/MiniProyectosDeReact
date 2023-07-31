import { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from "./Hooks/UseCatImage";
import { useCatFact } from "./Hooks/UseCatFact";

// const CAT_ENDPOINT_RANDOM_IMAGE= "https://cataas.com/cat/says/hello";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <button onClick={handleClick}>Cambiar Imagen</button>
      <h1>App de Gatos</h1>
      {fact && <p>{fact}</p>}
      {imageURL && (
        <img
          src={`${imageURL}`}
          alt="Imagen de gatos dada por la API con las 3 letras de la oracion"
        />
      )}
    </main>
  );
}
