import React from 'react';
import DanceFloor from './components/danceFloor';
import DanceTile from './components/danceTile';

//Define Floor Size
const [rowSize, colSize] = [40, 40];

export default function App() {
  //Create an array to map later
  let rows = [];
  let cols = [];
  for (let i = 0; i < rowSize; i++) rows.push(i);
  for (let o = 0; o < colSize; o++) cols.push(o);

  return (
    <DanceFloor row={rowSize} col={colSize}>
      {rows.map(row => {
        return cols.map(col => <DanceTile key={`${row} ${col}`} />);
      })}
    </DanceFloor>
  );
}
