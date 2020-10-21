import React from 'react';
import { Tile } from './styles/danceTile';

export default function index({ row, col }) {
  return <Tile row={row + 1} col={col + 1} />;
}
