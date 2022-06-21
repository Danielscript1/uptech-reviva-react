import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import styled from 'styled-components';
import { IconeSacola } from 'styles';
import { corPrimaria } from 'styles/variaveis';

const ContainerBotao = styled.section`
    display: grid;
    padding: 0.2rem;
    grid-column: 1 span;

`;

const Botao = styled.button`
        display: grid;
        grid-template-columns: 1fr auto;
        border: none;
        cursor: pointer;
        background-color: ${corPrimaria};
        color: #fff;
        font-size: 1.5rem;
        height: 150%;
        width: 100%;
        align-items: center; 
     

`;
type Props = {
  children: React.ReactNode ;
  onClick:()=>void ;
 

};

export default function BotaoSacola(props:Props){
  return(
    <ContainerBotao>

          
    <Botao onClick={props.onClick}>
      {props.children}
      <IconeSacola src={getPublicImageUrl("icons","shopping.svg")} width="20" height="20"/>
    </Botao>

    </ContainerBotao>
  )
}

