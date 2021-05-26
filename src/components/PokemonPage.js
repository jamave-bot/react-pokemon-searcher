import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super();
    this.state={
      pokemonArr : [],
      searchTerm : ''
    }
  }


  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(res=> res.json())
      .then(pokemonArr=>{
        this.setState({
          pokemonArr: pokemonArr
        })
      })
  }

  setSearchTerm = (newTerm)=>{
    this.setState({
      searchTerm: newTerm
    })
  }

  addPokemon =(newPokemonObj)=>{
    this.setState({
      pokemonArr: [...this.state.pokemonArr, newPokemonObj]
    })
  }

  render() {

    let filteredArr = this.state.pokemonArr.filter(pokemon => pokemon.name.includes(this.state.searchTerm) )


    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search setSearchTerm={this.setSearchTerm} value={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemonArr={filteredArr}/>
      </Container>
    )
  }
}

export default PokemonPage
