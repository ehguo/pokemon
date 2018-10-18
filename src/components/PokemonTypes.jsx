import React from 'react';
import '../styles/PokemonTypes.css';

const PokemonTypes = ({ types }) => {
  const renderTypes = () => (
    types.map((type, idx) => (
      <span key={idx} className={`pokemon-type ${type.toLowerCase()}`}>{type}</span>
    ))
  );
  return (
    <div className="type-wrapper">
      {renderTypes()}
    </div>
  );
}

export default PokemonTypes;
