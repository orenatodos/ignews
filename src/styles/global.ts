import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fff;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #1f2729;
    --gray-900: #121214;

    --cyan-500: #61dafb;
    --yellow-500: #eba417;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background: var(--gray-900);
    color: var(--white);
  }

  body,
  button,
  input,
  textarea,
  select {
    font: 400 1.6rem 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }

  ul {
    list-style: none;
  }
`
