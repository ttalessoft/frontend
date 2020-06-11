import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --cor-principal: #f9f9f9;
  --cor-background: #312e38;
  --cor-white: #ffffff;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline:0;
}

body{
  background: var(--cor-background);
  color: var(--cor-white);
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 500;
}

button{
  cursor: pointer;
}
`;
