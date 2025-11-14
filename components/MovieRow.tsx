'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[], categoryTitle: string }) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-2">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 snap-x snap-mandatory">
        {movies.map((m) => (
          <Link key={m.id} href={`/movie/${m.id}`} className="min-w-[150px] snap-start">
            <div className="rounded overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE}/w342${m.poster_path}`}
                alt={m.title || 'poster'}
                width={200}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
