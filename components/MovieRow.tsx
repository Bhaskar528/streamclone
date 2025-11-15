'use client';

import Link from 'next/link';
import Image from 'next/image';

type Movie = {
  id: string | number;
  title?: string;
  poster_path?: string;
  poster_url?: string;
};

export default function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="flex gap-4 overflow-x-auto py-3">
        {movies.map((movie) => {
          const src =
            movie.poster_url ||
            movie.poster_path ||
            "/posters/default.jpg"; // fallback image

          return (
            <div key={String(movie.id)} className="min-w-[150px]">
              <Link href={`/movie/${movie.id}`} className="block">
                <Image
                  src={src}
                  width={200}
                  height={300}
                  alt={movie.title ?? "Poster"}
                  className="rounded-lg shadow hover:scale-105 transition-transform"
                />
                <p className="mt-2 text-sm">{movie.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
