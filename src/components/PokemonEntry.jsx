import React, { Component } from 'react';
import SectionSelector from './SectionSelector';
import PokemonPortrait from './PokemonPortrait';
import PokemonTypes from './PokemonTypes';
import PokemonInfo from './PokemonInfo';
import PokemonMoves from './PokemonMoves';
import '../styles/PokemonEntry.css';

export default class PokemonEntry extends Component {

  render() {
    const {
      pokedexNumber,
      color,
      name,
      types,
      moves,
      baseStats
    } = this.props.entryData;

    return (
      <div className="pokemon-entry">
        <div className="entry-main-info">
          <div className="portrait-area">
            <PokemonPortrait
              pokedexNumber={pokedexNumber}
              name={name} />
            <PokemonTypes
              types={types} />
          </div>
          <SectionSelector />
        </div>
        {/* <PokemonInfo
          pokedexNumber={pokedexNumber}
          color={color}
          name={name}
          baseStats={baseStats} /> */}
        {/* <PokemonMoves
          moves={moves} /> */}
      </div>
    )
  }
}
