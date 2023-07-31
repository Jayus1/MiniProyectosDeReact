import { useState, useEffect } from "react";
import { getRandomFact } from "../Services/Fact";

export function useCatFact() {
  const [fact, setFact] = useState("lorem use cat bla bla bla");

  const refreshFact = () => {
    getRandomFact().then(setFact);
  };
  useEffect(() => {
    refreshFact();
  }, []);

  return { fact, refreshFact };
}
