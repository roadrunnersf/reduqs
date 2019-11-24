import {createGlobalStyle} from 'styled-components'

const FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(195,215,238,1);
    margin: 0px;
    padding: 0px;
    font-family: ${FONT};

  }
`
