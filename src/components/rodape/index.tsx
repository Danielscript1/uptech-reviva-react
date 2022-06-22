import LogoReviva from 'components/LogoReviva';
import NavegacaoRodape from './NavegacaoRodape';
import RedesSociais from './RedesSociais';
import { Contatos } from './Contatos';
import { Formulario } from './Formulario';
import {Footer,Grid} from  './style';


    


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