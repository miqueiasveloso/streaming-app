import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies("popular").then((movies) => {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    });
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-contents">
        <h1>{movie?.title || movie?.name}</h1>
        <p>{movie?.overview?.slice(0, 150)}...</p>
      </div>
      <div className="banner-fade" />
    </header>
  );
}

export default Banner;
