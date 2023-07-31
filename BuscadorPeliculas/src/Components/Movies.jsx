function ListMovies(movies) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoResult() {
  <p>No hay resultados de esa busquedas</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0;

  return hasMovies ? ListMovies(movies) : NoResult();
}
