import styled from 'styled-components';
import { corPrimaria} from 'styles/variaveis';
import LogoReviva from 'components/LogoReviva';

const PainelPrincipal = styled.section`
    width: 100%;
    overflow: hidden;
    color: #fff;

`;

const SecaoPainel = styled.div`
        display: grid;
        text-align: center;
        grid-template-rows: repeat(3, 1fr);
        padding: 2rem;
        background-color: ${corPrimaria};
        font-size: 3rem;
        

`;

const ContainerLogo = styled.figure`
  display: grid;
  justify-items: end;
        
`;

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