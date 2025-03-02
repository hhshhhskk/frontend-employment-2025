export async function fetchPokemon(limit: number, offset: number) {
  const res = await fetch(`http://localhost:3000/api/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }
  return res.json();
}
