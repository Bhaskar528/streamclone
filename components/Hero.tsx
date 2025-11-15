import Image from "next/image";

export default function Hero({ movie }: any) {
  const backdrop =
    movie.backdrop_path ||
    movie.backdrop_url ||
    "/posters/sample1.jpg";

  return (
    <section className="relative h-[450px] w-full rounded-xl overflow-hidden mb-10">
      <Image
        src={backdrop}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute bottom-10 left-10 text-white max-w-xl">
        <h1 className="text-4xl font-bold drop-shadow-xl">{movie.title}</h1>
      </div>
    </section>
  );
}
