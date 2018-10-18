import potBonuses from '../data/potBonuses';

export const calculateMaxStats = (baseHP, baseATK) => {
  const maxStatRange = 100;
  const baseMax = stat => stat + maxStatRange;
  return Object.keys(potBonuses).reduce((maxStats, potType) => {
    maxStats[potType] = {
      HP: baseMax(baseHP) + potBonuses[potType].statBonus,
      ATK: baseMax(baseATK) + potBonuses[potType].statBonus
    }
    return maxStats;
  }, {});
};
      