import Image from "next/image";
import { getMovieById } from "@/lib/movies";

export default function MoviePage({ params }: any) {
  const movie = getMovieById(params.id);

  if (!movie)
    return <h1 className="text-center mt-20 text-2xl">Movie Not Found</h1>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Image
        src={movie.poster_path}
        width={400}
        height={600}
        alt={movie.title}
        className="rounded"
      />

      <h1 className="text-4xl font-bold">{movie.title}</h1>

      <p className="text-lg">{movie.overview}</p>

      <p className="opacity-70">Rating: {movie.vote_average}</p>
    </div>
  );
}
