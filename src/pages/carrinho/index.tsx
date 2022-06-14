import { RecoilRoot } from 'recoil';
import BotaoPesquisar from '../../components/BotaoPesquisar';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Navbar from '../../components/navbar';
import Rodape from '../../components/rodape';
import Sacola from '../../components/Sacola';




export default function Carrinho(){

  return(
    <>
     <RecoilRoot>
    <Header/>
    <Navbar/>
    <Main>
    <BotaoPesquisar/>
    <Sacola/>
    </Main>
    <Rodape/>
    </RecoilRoot>
    
    </>
  )

}