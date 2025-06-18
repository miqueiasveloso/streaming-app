import { useEffect, useState } from "react";
import { fetchMovies } from "./api";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies("popular").then((data) => setMovies(data.results));
    }, []);

    return (
        <div>
            <h1>Netflix Clone</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
