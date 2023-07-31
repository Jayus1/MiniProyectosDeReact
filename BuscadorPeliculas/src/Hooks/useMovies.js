import { useRef, useState, useCallback, useMemo } from "react";
import withoutresult from "../mocks/no-results.json";
import responsesMovies from "../mocks/with-results.json";
import { searchMovies } from "../Servicios/Movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const lastSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === lastSearch.current) return;

    try {
      if (lastSearch === search) return;

      setLoading(true);
      setError(null);
      lastSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
