import { createGlobalStyle, styled } from 'styled-components'

export const Cores = {
  vermelho: '#E66767',
  vermelho2: '#e44',
  begeBG: '#FFF8F2',
  bege: '#FFEBD9',
  branco: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${Cores.begeBG};
  }
`
