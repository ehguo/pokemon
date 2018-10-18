import React from 'react';
import { getMoveSrc } from '../utils/move';
import '../styles/PokemonMoves.css';

const PokemonMoves = ({ moves }) => {
  const renderMoves = () => (
    moves.map((moveData, idx) => {
      const src = getMoveSrc(moveData.name);
      return (
        <div key={idx} className="move-wrapper">
          <img
            className="move-icon"
            src={src}
            alt={moveData.name}
            width={20}
            height={20} />
          <span key={idx} className="pokemon-move">
            {moveData.name}</span>
          <span></span>
        </div>
      );
    })
  );
  return (
    <div className="moves-container">
      {renderMoves()}
    </div>
  )
}

export default PokemonMoves;
