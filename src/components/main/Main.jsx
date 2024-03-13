import React, {useState} from "react"

// importanto o arquivo de estilização
import * as S from "./MainStyle"

// importando imagens
import Ben from "./imgMain/Ben10.png"
import Loney from "./imgMain/Loneytunes.png"
import Menina from "./imgMain/meninas.png"
import Gumball from "./imgMain/mundoGumball.png"
import TJ from "./imgMain/tomJerry.png"
import Scooby from "./imgMain/scooby.png"
import Programacao from "../programacao/Programacao.jsx"

function Main(){
// map é um método que mapeia uma array
    const [galeria, setGaleria] = useState(
        [ Gumball, Menina, TJ]
    )
    return(
        <main>
            <S.StyledSection1>
                <S.StyleImg  src={Scooby} alt="" /> 
                <S.StyleImg  src={Ben} alt="" /> 
                <S.StyleImg src={Loney} alt="" />
            </S.StyledSection1>

            <S.StyleSection2>
                {galeria.map((item)=> (
                    <img src={item} alt="" />
                ))}
                
            </S.StyleSection2> 
            <Programacao/> 
        </main>
    )
}
export default Main