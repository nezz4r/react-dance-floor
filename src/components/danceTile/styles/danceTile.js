import styled from 'styled-components/macro';

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

let color = () => getRandomColor();

export const Tile = styled.div`
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  width: 16px;
  height: 16px;
  transition: 2s ease;
  margin: 2px;
  grid-row: ${({ row }) => row} / span 1;
  grid-column: ${({ col }) => col} / span 1;
  &:hover {
    transition: 0s;
    background-color: ${color};
    box-shadow: 0 0 2px ${color}, 0 0 10px ${color};
  }
`;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]; //fazendo o sorteio de cores aleatórias dentro do array
}
