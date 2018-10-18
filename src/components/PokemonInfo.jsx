import React from 'react';
import '../styles/PokemonInfo.css';

const PokemonInfo = props => {
  const { pokedexNumber, color, name, baseStats } = props;
  return (
    <div>
      <span>{pokedexNumber}</span>
      <span>{color}</span>
      <span>{name}</span>
      <div className="base-stats">
        <span>Base HP: {baseStats.HP}</span>
        <span>Base ATK: {baseStats.ATK}</span>
      </div>
    </div>
  )
}

export default PokemonInfo;
