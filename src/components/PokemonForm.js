import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props){
    super()
    this.state={
      name: '',
      hp: 0,
      frontUrl: '',
      backUrl: ''
    }
  }



  handleChange = (evt) =>{
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) =>{
    evt.preventDefault();

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites:{
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      }),
    })
      .then((r) => r.json())
      .then((pokemonObj) => this.props.addPokemon(pokemonObj));
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
