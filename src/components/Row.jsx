import './Row.css';
import { useEffect, useState } from "react";
import { fetchMovies } from "../api";

function Row({ category, title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(category).then(setMovies);
  }, [category]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row-poster"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
