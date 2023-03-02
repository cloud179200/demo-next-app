// import Image from "next/image"
import React from "react"
import { Pokemon } from "types"
import { getPokemonAPIv1ImageSrc } from "utils"

interface IProps {
  PokemonData: Pokemon
}
const PokemonComponent = (props: IProps) => {
  const { pokemon_id, pokemon_v2_pokemon, sprites } = props.PokemonData
  console.log({ sprites })
  return <div className="p-6 mb-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="shrink-0">
      <img src={getPokemonAPIv1ImageSrc(pokemon_id) || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} width={100} height={50} alt={""} />
      <img src={getPokemonAPIv1ImageSrc(pokemon_id, false) || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} width={100} height={50} alt={""} />
    </div>
    <div>
      <div className="text-xl font-medium text-black">{pokemon_v2_pokemon.name}</div>
      <p className="text-slate-500"></p>
    </div>
  </div>
}

export default PokemonComponent