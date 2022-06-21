import { listaDeProdutos } from 'common/utils/data';
import BotaoPesquisar from 'components/BotaoPesquisar';
import BotaoSacola from 'components/BotaoSacola';
import { ListaDeProdutos } from 'components/ListaProdutos';
import { NaoEncontrado } from 'components/NaoEncontrado';
import Painel, { Descricao } from 'components/painel';
import TamanhosDisponivel from 'components/TamanhosDisponivel';
import { useNavigate, useParams } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Titulo } from 'styles';
import {SecaoImagem} from '../../styles/index';

const PaginaDetalhe = styled.section`
        display: grid;
        grid-template-columns: 1fr 1fr;
`;



const SecaoInformacoes = styled.section`
font-size: 5rem;
display: grid;
align-self: center;
gap: 2rem;
p{
  text-align: start;
}


`;

const SecaoModelos = styled.section`
          
 //adicinar breakpoints

`;
const SecaoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;



function DetalhesProdutos() {
  const produtos = useRecoilValue(listaDeProdutos);
  const secaoProdutos1 = Object.values(produtos).filter(produto => produto.secaoProdutos === 1) ;
  const navegation = useNavigate();
  const { id } = useParams();
  const detalhes = produtos.find(item=> item.id === Number(id));
  console.log("recebendo detalhes",detalhes);
  if(!detalhes){
    return <NaoEncontrado />;
  }
 
  return(
    <RecoilRoot>
     <BotaoPesquisar/>
     <PaginaDetalhe>
      <SecaoImagem src={detalhes.imagens[0].url} width="100"/>
     <SecaoInformacoes>
    
      <Titulo>{detalhes.nome}, R$ {detalhes.preco}</Titulo>
        <Descricao>{detalhes.descricao}</Descricao>
        <SecaoModelos>
          <SecaoImagem src={detalhes.imagens[0].url}/>
          <SecaoImagem src={detalhes.imagens[0].url}/>
          <SecaoImagem src={detalhes.imagens[0].url}/>
          <SecaoImagem src={detalhes.imagens[0].url}/>
          
      </SecaoModelos>
      <SecaoContainer>
        <TamanhosDisponivel tamanhos={detalhes.tamanhos_disponiveis}></TamanhosDisponivel>
        <BotaoSacola   onClick={()=>(detalhes)} >POR NA SACOLA</BotaoSacola>
      </SecaoContainer>
        
        
     </SecaoInformacoes>
     
     
     
      

      
     </PaginaDetalhe>

      <Painel/>
      <ListaDeProdutos titulo='Últimos lançamentos'  Produtos={secaoProdutos1}/>

    </RecoilRoot>  
   
  )

}

export default DetalhesProdutos;