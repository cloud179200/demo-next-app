import Axios, { AxiosRequestConfig } from "axios"
import config from "config"
import { Pokemon } from "types"
export const pokemonGQL = (limit?: number) => (`
{
  pokemon_v2_pokemonsprites(limit: ${limit || 100}) {
    sprites
    pokemon_id
    pokemon_v2_pokemon {
      id
      height
      base_experience
      name
      pokemon_species_id
    }
  }
}`)

export const getPokemon = async (limit?: number) => {
  const configRequest: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Method-Used": "graphiql"
    }
  }

  const body = {
    query: pokemonGQL(limit)
  }

  const response = await Axios.post(config.API_URL, body, configRequest);
  const result = (response?.data?.data?.pokemon_v2_pokemonsprites || []).map((item: Pokemon) => ({...item, sprites: JSON.parse(item.sprites)}))
  return result
}
