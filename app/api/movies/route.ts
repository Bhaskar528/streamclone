import { NextResponse } from 'next/server';
import { getAllMovies } from '@/lib/movies';

export async function GET() {
  const movies = getAllMovies();
  return NextResponse.json(movies);
}
