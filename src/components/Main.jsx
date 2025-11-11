import { useState, useEffect } from "react";

function App() {
    const movies = [
        { title: "Inception", genre: "Fantascienza" },
        { title: "Il Padrino", genre: "Thriller" },
        { title: "Titanic", genre: "Romantico" },
        { title: "Batman", genre: "Azione" },
        { title: "Interstellar", genre: "Fantascienza" },
        { title: "Pulp Fiction", genre: "Thriller" },
    ];

    const [selectedGenre, setSelectedGenre] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        if (selectedGenre === "") {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(
                movies.filter((movie) => movie.genre === selectedGenre)
            );
        }
    }, [selectedGenre]);

    return (
        <main className="container text-center py-4">
            <h1 className="mb-4 text-primary">Film</h1>

            <div className="mb-4">
                <select
                    className="form-select w-auto d-inline-block"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="">Tutti i Generi</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
            </div>

            <ul className="list-group mx-auto" style={{ maxWidth: "400px" }}>
                {filteredMovies.map((movie) => (
                    <li
                        key={movie.title}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <span>{movie.title}</span>
                        <em>{movie.genre}</em>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default App;