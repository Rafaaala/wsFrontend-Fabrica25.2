"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    alert("Você pesquisou por: " + query);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 bg-red-500 px-4 py-2 rounded-lg">
        <h1 className="text-black">Pesquise o pokemon que deseja!</h1>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-2 rounded-l-lg border-none focus:outline-none text-black"
          />
          <button
            type="submit"
            className=" bg-white-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg"
          >
            Buscar
          </button>
        </form>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2>Poké API</h2>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
