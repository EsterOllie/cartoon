import React,{ useState } from 'react'
import Main from "./components/main/Main.jsx"
import Header from "./components/header/Header.jsx"
import {createGlobalStyle} from "styled-components"
import Footer from "./components/footer/Footer.jsx"
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
    <Footer/>
    </>
  )
}

export default App
