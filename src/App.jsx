import React,{ useState } from 'react'
import Main from "./components/main/Main.jsx"
import Header from "./components/header/Header.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
    <Header/>
    <Main/>
    </>
  )
}

export default App
