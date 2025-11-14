import { fetchMovieById } from '../../../lib/tmdb';
import Image from 'next/image';
import { Genre } from '@/types/movie';

export default async function MoviePage(props : { params: Promise<{ id: string }> }) {
  const {id} = await props.params;
  const movie = await fetchMovieById(id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE}/w500${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={600}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-sm text-gray-400">{movie.release_date}</p>
          <div className="mt-4">{movie.overview}</div>
          <div className="mt-6">
            <strong>Genres:</strong> {movie.genres?.map((g: Genre) => g.name).join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
}
