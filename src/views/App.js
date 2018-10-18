import React, { Component } from 'react';
import PokemonEntry from '../components/PokemonEntry';
import '../styles/App.css';

import pokemonEntries from '../data/pokemonData';

class App extends Component {
  renderPokemonEntries = () => (
    pokemonEntries.map((entryData, idx) => (
      <PokemonEntry key={idx} entryData={entryData} />
    ))
  )

  render() {
    return (
      <div className="app">
        {this.renderPokemonEntries()}
      </div>
    );
  }
}

export default App;
