import style from './Rodape.module.scss';
import styled from 'styled-components';
import LogoReviva from 'components/LogoReviva';
import { corPrimaria, corSecundario } from 'styles/variaveis';
import NavegacaoRodape from './NavegacaoRodape';
import RedesSociais from './RedesSociais';
import { Contatos } from './Contatos';
import { Formulario } from './Formulario';




const Footer = styled.footer`

    width: 100%;
    background-color: ${corPrimaria};
    color:${corSecundario};
    display: grid;
    padding:3rem;
    grid-template-rows: repeat(1, 1fr);

`

 const Grid = styled.div`
        display: grid;
        gap:2;
        grid-template-columns: repeat(4,1fr);

   
`;


    


function Rodape(){
  return(

    <Footer>
    <LogoReviva/>
    <Grid>
    <NavegacaoRodape menu="Menu"/>
    <RedesSociais menu="Siga-nos nas redes sociais"/>
    <Contatos menu = "Entre em contato"/>
    <Formulario menu="Assine nossa newsletter"></Formulario>
    </Grid>

</Footer>    
  )
}

export default Rodape;