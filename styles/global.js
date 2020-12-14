import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  justify-content: center;
  background-color: #121214;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14pxlarge;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  }

html, body, #root {
  height: 100vw;
}

`;