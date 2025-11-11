import { useState } from "react";

export default function Main() {
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
        <main>
            <h1>Film</h1>

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