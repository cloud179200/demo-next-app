export const getPokemonAPIv1ImageSrc = (id: number, front = true) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated${front ? "" : "/back"}/${id || 1}.gif`
}