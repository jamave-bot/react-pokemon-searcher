import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      image: this.props.pokemon.sprites.front
    }
  }

  handleClick = () =>{
    if (this.state.image === this.props.pokemon.sprites.front){
      this.setState({
        image: this.props.pokemon.sprites.back
      })
    } else{
      this.setState({
        image: this.props.pokemon.sprites.front
      })
    }
  }


  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.image} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
