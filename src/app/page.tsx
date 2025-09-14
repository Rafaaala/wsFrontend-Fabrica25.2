"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState("");
  const [pokemons, setPokemons] = useState<any[]>([]);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setPokemon(null);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokémon não encontrado");
      }

      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const fetchPokemons = async (quantidade: number) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`
      );
      const data = await response.json();

      const loadedPokemons = await Promise.all(
        data.results.map(async (val: any) => {
          const res = await fetch(val.url);
          const pokemonSolo = await res.json();
          return {
            nome: val.name,
            foto: pokemonSolo.sprites.front_default,
          };
        })
      );

      setPokemons(loadedPokemons);
    } catch (err) {
      console.error("Erro ao carregar pokémons:", err);
    }
  };

  useEffect(() => {
    fetchPokemons(20);
  }, []);

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100">
      <header className="row-start-1 bg-red-500 px-4 py-2 rounded-lg w-full max-w-3xl border-2 border-black">
        <h1 className="text-white text-lg font-bold mb-2">
          Pesquise o Pokémon que deseja!
        </h1>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Digite o nome..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3 py-2 rounded-l-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full font-semibold transition"
          >
            Buscar
          </button>
        </form>
      </header>
      <main className="row-start-2 flex flex-col gap-8 items-center w-full max-w-3xl">
        <h2 className="text-xl font-semibold">Poké API</h2>

        {error && <p className="text-red-600 font-medium">{error}</p>}

        {pokemon && (
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-4 w-full max-w-sm">
            <h3 className="text-2xl font-bold capitalize">{pokemon.name}</h3>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={120}
              height={120}
            />
            <p>
              <strong>Altura:</strong> {pokemon.height}
            </p>
            <p>
              <strong>Peso:</strong> {pokemon.weight}
            </p>
            <p>
              <strong>Tipo:</strong>{" "}
              {pokemon.types.map((t: any) => t.type.name).join(", ")}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {pokemons.map((poke, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <Image src={poke.foto} alt={poke.nome} width={80} height={80} />
              <p className="capitalize mt-2 font-medium">{poke.nome}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 items-center justify-center bg-red-500 text-white px-4 py-3 rounded-lg w-full max-w-3xl border-2 border-black">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://pokeapi.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            aria-hidden
          />
          PokeAPI
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://github.com/Rafaaala"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Rafaaala
        </a>
      </footer>
    </div>
  );
}
