import fs from "fs";
import path from "path";

export function getAllMovies() {
  const filePath = path.join(process.cwd(), "public", "data", "movies.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileData);
}

export function getMovieById(id: string) {
  const movies = getAllMovies();
  return movies.find((m: any) => m.id === id);
}
