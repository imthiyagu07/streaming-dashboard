const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

export async function fetchPopular() {
    const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch popular");
    return res.json();
}

export async function fetchMovieById(id: string) {
    const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch movie");
    return res.json();
}

export async function fetchNowPlaying() {
    const res = await fetch(`${BASE}/movie/now_playing?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch now playing");
    return res.json();
}

export async function fetchTopRated() {
    const res = await fetch(`${BASE}/movie/top_rated?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch top rated");
    return res.json();
}