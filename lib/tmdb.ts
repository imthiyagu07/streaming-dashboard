const BASE = 'https://api.themoviedb.org/3';
const TOKEN = process.env.TMDB_ACCESS_TOKEN;

export async function fetchPopular() {
    const res = await fetch(`${BASE}/movie/popular`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json",
        },
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        const errorText = await res.text();
        console.error("TMDB Movie Error:", errorText);
        throw new Error("Failed to fetch popular movie");
    }
    return res.json();
}

export async function fetchMovieById(id: string) {
    const res = await fetch(`${BASE}/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json",
        },
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        const errorText = await res.text();
        console.error("TMDB Movie Error:", errorText);
        throw new Error("Failed to fetch movie");
    }
    return res.json();
}

export async function fetchNowPlaying() {
    const res = await fetch(`${BASE}/movie/now_playing`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json",
        },
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        const errorText = await res.text();
        console.error("TMDB Movie Error:", errorText);
        throw new Error("Failed to fetch now playing");
    }
    return res.json();
}

export async function fetchTopRated() {
    const res = await fetch(`${BASE}/movie/top_rated`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json",
        },
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        const errorText = await res.text();
        console.error("TMDB Movie Error:", errorText);
        throw new Error("Failed to fetch top rated");
    }
    return res.json();
}