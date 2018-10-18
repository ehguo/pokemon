export const getMoveSrc = moveName => (
  `https://www.serebii.net/quest/moves/${moveName.replace(/ /g, '').toLowerCase()}.png`
);
