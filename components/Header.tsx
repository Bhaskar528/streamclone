"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b border-zinc-800">
      <Link href="/" className="text-2xl font-bold">
        StreamClone
      </Link>
    </header>
  );
}
