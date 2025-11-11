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
        <main>
            <h1>Film</h1>

            <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                <option value="">Tutti i generi</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>

            <ul>
                {filteredMovies.map((m) => (
                    <li key={m.title}>
                        {m.title} — <em>{m.genre}</em>
                    </li>
                ))}
            </ul>
        </main>
    );
}