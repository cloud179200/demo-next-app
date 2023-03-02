export interface Pokemon {
  sprites: any,
  pokemon_id: number
  pokemon_v2_pokemon: {
    id: number
    height: number
    base_experience: number
    name: string
    pokemon_species_id: number
  }
}