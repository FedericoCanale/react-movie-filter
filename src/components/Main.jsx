import { useState, useEffect } from "react";

export default function Main() {
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
        const filtered = movies.filter(
            (movie) =>
                selectedGenre === "" || movie.genre === selectedGenre
        );
        setFilteredMovies(filtered);
    }, [selectedGenre]);

    return (
        <main className="container py-4">
            <h1 className="text-center mb-4">Film</h1>

            <div className="mb-4 text-center">
                <label className="form-label me-2 fw-bold" htmlFor="genreSelect">
                    Filtra per genere:
                </label>
                <select
                    id="genreSelect"
                    className="form-select d-inline-block w-auto"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="">Tutti i generi</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
            </div>

            <ul className="list-group">
                {filteredMovies.map((m) => (
                    <li key={m.title} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{m.title}</span>
                        <em className="text-muted">{m.genre}</em>
                    </li>
                ))}
            </ul>
        </main>
    );
}