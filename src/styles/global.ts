import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #222831;
    color: #eee;
    -webkit-font-smoothing: antialiased;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #222831;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #393e46;
      border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${lighten(0.05, '#393e46')};
    }
  }
  border-style, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;