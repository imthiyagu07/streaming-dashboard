import { fetchPopular, fetchNowPlaying, fetchTopRated } from '../lib/tmdb';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

export default async function HomePage() {
  const [popularRes, nowRes, topRes] = await Promise.all([
    fetchPopular(), fetchNowPlaying(), fetchTopRated()
  ]);

  const popular = popularRes.results || [];
  const nowPlaying = nowRes.results || [];
  const topRated = topRes.results || [];

  return (
    <div>
      <HeroBanner movie={popular[0]} />
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <MovieRow movies={popular} categoryTitle="Popular" />
        <MovieRow movies={nowPlaying} categoryTitle="Now Playing" />
        <MovieRow movies={topRated} categoryTitle="Top Rated" />
      </section>
    </div>
  );
}
