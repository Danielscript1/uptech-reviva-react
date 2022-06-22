import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import { IconeSacola } from 'styles';
import {ContainerBotao,Botao} from  './style';

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

