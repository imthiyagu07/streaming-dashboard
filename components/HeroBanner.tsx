import Image from 'next/image';
import { Movie } from '@/types/movie';

export default function HeroBanner({ movie }: { movie: Movie }) {
  if (!movie) return null;
  const backdrop = `${process.env.NEXT_PUBLIC_IMAGE_BASE}/original${movie.backdrop_path}`;
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full">
      <Image src={backdrop} alt={movie.title || 'Hero'} fill priority style={{ objectFit: 'cover' }} />
      <div className="absolute bottom-10 left-6 md:left-16 max-w-2xl text-white z-20">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-xl">
          {movie.title}
        </h1>
        <p className="mt-3 md:text-lg line-clamp-3 drop-shadow-md">
          {movie.overview}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </section>
  );
}
