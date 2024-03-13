import React, {useState} from "react"
import * as S from "./HeaderStyle.jsx"
import Controle from "./controle.png"
import Logo from "./logo.png"
import Relogio from "./relogio.png"
function Header(){
    return(
        <S.StyleHeader> 
            <img src={Logo} alt="" />

            <S.StyleSection>
                <img src={Controle} alt="" />
                <img src={Relogio} alt="" />
            </S.StyleSection>
            
        </S.StyleHeader>
    )
}
export default Header