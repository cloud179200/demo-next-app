import PokemonComponent from 'components/Pokemon'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { getPokemon } from 'server/pokemon'
import { Pokemon } from 'types'

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pokemons } = props.data
  return <>
    {pokemons.map((item: Pokemon) => (<PokemonComponent key={item.pokemon_id} PokemonData={item} />))}
  </>
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemons = await getPokemon(15)
  return { props: { data: { pokemons } } }
}