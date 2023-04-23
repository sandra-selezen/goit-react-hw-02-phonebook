import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: ${p => p.theme.colors.whiteColor};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
    color: ${p => p.theme.colors.blackColor};
  }
  h1, h2, ul, ol, p {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  input {
    color: ${p => p.theme.colors.whiteColor};
    outline: none;
    border: none;
  }
  h1, h2 {
    font-weight: 500;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;