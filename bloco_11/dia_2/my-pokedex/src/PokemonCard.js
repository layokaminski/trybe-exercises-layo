import React from 'react';


class PokemonCard extends React.Component {
  render() {
      const { name, type, averageWeight, image } = this.props.data;
      const { value, measurementUnit } = averageWeight;

    return (
      <div className='pokemon'>
        <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {value} {measurementUnit}</p>
        </div>
       <img src={image}></img>
      </div>
    )
  }
}

export default PokemonCard;