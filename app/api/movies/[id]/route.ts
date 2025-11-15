import { NextResponse } from "next/server";
import { getMovieById } from "@/lib/movies";

export async function GET(_: any, { params }: any) {
  const movie = getMovieById(params.id);
  return NextResponse.json(movie || {});
}
