import React, { useEffect } from 'react';
import { Tile } from './styles/danceTile';
import useHover from '../../hooks/useHover';

//Colors Array
const colors = [
  '#ff33cc',
  '#ff3399',
  '#ff0066',
  '#ff0000',
  '#ff3300',
  '#FFFF00',
  '#8A2BE2',
  '#7FFF00',
  '#FF00FF',
];

export default function DanceTile() {
  //Attach useHover to Tile
  const [tileRef, isTileHovered] = useHover();
  useEffect(() => getRandomColor, [isTileHovered]);

  return <Tile ref={tileRef} color={color} />;
}

//Gets random color
let color;
function getRandomColor() {
  color = colors[Math.floor(Math.random() * colors.length)];
}
