import styled from 'styled-components';
import { corPrimaria} from 'styles/variaveis';
import LogoReviva from 'components/LogoReviva';
import {PainelPrincipal,SecaoPainel,ContainerLogo} from  './style';



export const Descricao = styled.p`
    text-align: center;

`;




export default function Painel(){
  return(
<PainelPrincipal>
            <SecaoPainel>
                <Descricao>Fique por dentro de tudo que há de novidade no mundo da moda!</Descricao>
                <Descricao >Baixe já nosso manual de moda!</Descricao>
                <ContainerLogo>
                <LogoReviva/>
                </ContainerLogo>
                
            </SecaoPainel>

</PainelPrincipal>
  )
}