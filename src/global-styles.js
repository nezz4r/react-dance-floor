import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
	box-sizing: border-box;
}
 html, body{ 
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #111;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
 }
`;
