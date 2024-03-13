import React, {useState} from "react"
import * as S from "./ProgramacaoStyle"

import Dexter from "./imgProg/dexter.png"
//import VacaFrango from "./ImagensProgramacao/vacaefrango"
import Du from "./imgProg/ddd.png"
import Coragem from "./imgProg/coragem.png"
import vFrango from "./imgProg/vacaFrango.png"
import Monica from "./imgProg/tmonica.png"
import jorel from "./imgProg/jorel.png"
import steve from "./imgProg/steve.png"
import billy from "./imgProg/billy.png"

function Programacao(){

const [desenhos, setDesenhos] = useState([
    {nome: "O laboratório de Dexter", hora: "7:00h", imagem: Dexter},
    {nome: "A vaca e o frango", hora: "8:00h", imagem: vFrango },
    {nome: "Du, Dudu e Edu", hora: "9:00h", imagem: Du},
    {nome: "Coragem, o cão covarde", hora: "10h", imagem: Coragem },
    {nome: "Turma da Mônica Jovem", hora: "11h", imagem: Monica },
    {nome: "Irmão do Jorel", hora: "12h", imagem: jorel },
    {nome: "Steve Universo", hora: "13h", imagem: steve },
    {nome: "Billy e Mandy", hora: "10h", imagem: billy }
])

    return(
        <S.StyledSection>
            {desenhos.map((item)=>(
              <S.Box>
                <h2> {item.nome} </h2>
                <h2> {item.hora} </h2>
                <img src={item.imagem} alt="" />
              </S.Box>
            ))}
        </S.StyledSection>
    )
}

export default Programacao