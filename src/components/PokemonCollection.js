import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  showCards= () =>{
    return this.props.pokemonArr.map(pokemon=>{
      return <PokemonCard pokemon={pokemon} key={pokemon.id}/>
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.showCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
