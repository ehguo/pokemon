import React from 'react';
import { getPortraitSrc } from '../utils/portrait';
import '../styles/PokemonPortrait.css';

const PokemonPortrait = ({ pokedexNumber, name }) => {
  const src = getPortraitSrc(pokedexNumber);
  return (
    <img
      className="pokemon-portrait"
      src={src}
      alt={name}
      width={150}
      height={150} />
  )
}

export default PokemonPortrait;
