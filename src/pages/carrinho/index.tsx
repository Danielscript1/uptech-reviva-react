import { RecoilRoot } from 'recoil';
import BotaoPesquisar from '../../components/BotaoPesquisar';
import Main from '../../components/Main';
import Sacola from '../../components/Sacola';




export default function Carrinho(){

  return(
    <>
     <RecoilRoot>
    <Main>
    <BotaoPesquisar/>
    <Sacola/>
    </Main>
    </RecoilRoot>
    
    </>
  )

}