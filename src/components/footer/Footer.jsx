import React,{useState} from "react";
import * as S from "./FooterStyled.jsx"
import logo from "./imgFooter/footer.png"
import Git from "./imgFooter/git.png"
import Linkedin from "./imgFooter/linkedin.png"

function Footer(){
    return(
        <S.styledFooter>
            <S.styledSection src={logo} alt="" />

            <S.styledSec1>
                <S.StyledLink href="#">Sobre nós</S.StyledLink>
                <S.StyledLink href="#">Produtos</S.StyledLink>
                <S.StyledLink href="#">Personagens</S.StyledLink>
            </S.styledSec1>

            <section>
                <S.styledSection src={Git} alt="" />
                <S.styledSection src={Linkedin} alt="" />
            </section>
        </S.styledFooter>
    )
}
export default Footer;