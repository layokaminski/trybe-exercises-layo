import React from 'react';
import PokemonCard from './PokemonCard';


class PokemonCardList extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        {this.props.list.map((pokemon, index) => <PokemonCard key={index} data={pokemon} />)}
      </div>
    )
  }
}

export default PokemonCardList;