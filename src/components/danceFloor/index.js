import React from 'react';
import { Floor } from './styles/danceFloor';

export default function DanceFloor({ children, ...props }) {
  return (
    <Floor col={props.col} row={props.row}>
      {children}
    </Floor>
  );
}
