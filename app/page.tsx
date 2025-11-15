import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";
import { getAllMovies } from "@/lib/movies";

export default function Home() {
  const movies = getAllMovies();

  const trending = movies.slice(0, 10);
  const popular = movies.slice(10, 30);

  return (
    <>
      <Hero movie={trending[0]} />

      <section className="space-y-8">
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Popular Movies" movies={popular} />
      </section>
    </>
  );
}
