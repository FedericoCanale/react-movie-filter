import { useState } from "react";

function App() {
    const movies = [
        { title: "Inception", genre: "Fantascienza" },
        { title: "Il Padrino", genre: "Thriller" },
        { title: "Titanic", genre: "Romantico" },
        { title: "Batman", genre: "Azione" },
        { title: "Interstellar", genre: "Fantascienza" },
        { title: "Pulp Fiction", genre: "Thriller" },
    ];

    const [filteredMovies, setFilteredMovies] = useState(movies);

    return (
        <div>
            <h1>FILM</h1>

            <ul>
                {filteredMovies.map((movie) => (
                    <li key={movie.title}>
                        {movie.title} : {movie.genre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;