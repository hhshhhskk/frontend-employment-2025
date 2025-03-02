import { fetchPokemon } from '@/app/hooks/useFetchPokemon';
import Image from 'next/image';

interface Pokemon {
  name: string;
  image: string;
}

export default async function PokemonsPage() {
  const limit = 20;
  const offset = 0;

  const data: Pokemon[] = await fetchPokemon(limit, offset);

  return (
    <main className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {data.map((pokemon) => (
          <div key={pokemon.name} className="w-[250px] h-[300px] bg-[rgb(211,211,211)] p-4">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={300}
              height={400}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-center mt-2">{pokemon.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
