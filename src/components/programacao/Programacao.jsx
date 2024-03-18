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
  // rascunho dentro do returno : 
  //<section>
  //           {desenhosManha.map((item)=>(
  //            <h2>{item.nome}</h2>
  //           ))}
  //         </section>

const [desenhos, setDesenhos] = useState([
    {nome: "O laboratório de Dexter", hora: "7:00h", imagem: Dexter, desenhosManha : true},
    {nome: "A vaca e o frango", hora: "8:00h", imagem: vFrango, desenhosManha : true },
    {nome: "Du, Dudu e Edu", hora: "9:00h", imagem: Du, desenhosManha : true},
    {nome: "Coragem, o cão covarde", hora: "10h", imagem: Coragem, desenhosManha : true },
    {nome: "Turma da Mônica Jovem", hora: "11h", imagem: Monica, desenhosManha : true },
    {nome: "Irmão do Jorel", hora: "12h", imagem: jorel, desenhosManha : false},
    {nome: "Steve Universo", hora: "13h", imagem: steve, desenhosManha : false },
    {nome: "Billy e Mandy", hora: "14h", imagem: billy, desenhosManha : false}
])

const desenhosManha = desenhos.filter((item)=> item.desenhosManha == true)

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