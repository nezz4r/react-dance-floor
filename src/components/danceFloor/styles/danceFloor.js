import styled from 'styled-components/macro';

export const Floor = styled.div`
  display: grid;
  grid-template: repeat(${({ row }) => row}, 20px) / repeat(
      ${({ col }) => col},
      20px
    );
  align-items: center;
  justify-content: center;
`;
