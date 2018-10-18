import types from './pokemonTypes';
import moves from './pokemonMoves';
import colors from './pokemonColors';

export default [
  {
    pokedexNumber: '001',
    name: 'Bulbasaur',
    color: colors.yellow,
    types: [
      types.grass,
      types.poison
    ],
    moves: [
      moves.petalDance,
      moves.synthesis,
      moves.tackle,
      moves.vineWhip
    ],
    baseStats: {
      HP: 125,
      ATK: 75
    }
  },
  {
    pokedexNumber: '066',
    name: 'Machop',
    color: colors.blue,
    types: [
      types.fighting
    ],
    moves: [
      moves.bulkUp,
      moves.rockSmash,
      moves.rollingKick,
      moves.submission
    ],
    baseStats: {
      HP: 80,
      ATK: 120
    }
  },
  {
    pokedexNumber: '120',
    name: 'Staryu',
    color: colors.yellow,
    types: [
      types.water
    ],
    moves: [
      moves.flash,
      moves.flashCannon,
      moves.iceBeam,
      moves.icyWind,
      moves.twister
    ],
    baseStats: {
      HP: 60,
      ATK: 140
    }
  }
]
