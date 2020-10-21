import styled from 'styled-components/macro';

export const Tile = styled.div`
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  width: 16px;
  height: 16px;
  transition: 2s ease;
  margin: 2px;

  &:hover {
    transition: 0s;
    background-color: ${({ color }) => color};
    box-shadow: 0 0 2px ${({ color }) => color},
      0 0 10px ${({ color }) => color};
  }
`;
