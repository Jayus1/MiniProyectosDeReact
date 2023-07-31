import { useState, useEffect } from "react";

const CAT_PREFIJ_RANDOM_IMAGE = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageURL, setImageURL] = useState();
  useEffect(() => {
    const threeFisrtWords = fact.split(" ", 3).join(" ");
    console.log(threeFisrtWords);

    fetch(`https://cataas.com/cat/says/${threeFisrtWords}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageURL(url);
      });
  }, [fact]);
  return { imageURL: `${CAT_PREFIJ_RANDOM_IMAGE}${imageURL}` };
}
