import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/libs/AlurakutCommons';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding:0px;
  box-sizing: border-box;

}
  body {
    margin: 0;
    padding: 0;
    font-family:arial;
    background-color: #D9E6F6;

  }


#__next{
    width: 100%;
    height: 100vh;
  }

img{
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${ AlurakutStyles }
`

const theme = {
  colors: {
    primary: '#0070f3',
    backgroundDefault: '#D9E6F6 ',
    white: '#FFFFFF'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
