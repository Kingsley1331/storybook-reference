import {createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #F5F5F5;
  }
`;
// const GlobalStyles = createGlobalStyle`
//   body{
//     background-color: ${props => props.theme.primary}
//   }
// `;

export default GlobalStyles