import {listaDeProdutos} from 'common/utils/data';
import IListaProdutos from "Interfaces/IListaProdutos";
import { useRecoilState, useRecoilValue } from 'recoil';
import {  statusCarrinho } from 'common/utils/produtosCarrinhos';
import { addCarrinho } from 'state/hooks/useAdicionarCarrinho';
import { diminuiEstoque } from 'state/hooks/useDiminuiEstoque';
import { Link } from 'react-router-dom';
import TamanhosDisponivel from 'components/TamanhosDisponivel';
import BotaoSacola from '../BotaoSacola';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Titulo,DescricaoItems,SecaoImagem } from 'styles/index';
export interface imagens{
  url:string;
  descricao:string;
}

export interface Props{
  id:number;
  nome:string;
  url:string;
  preco:number;
  descricao:string;
  tamanhos_disponiveis:string[];
  quantidade_disponivel:number;
  secaoProdutos:number;
  imagens:imagens[]
}


interface listaProdutos{
  titulo:string;
  Produtos : IListaProdutos[];
  
  
}

const Secao = styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);

`;

const ContainerBorda = styled.section`
    border: 1px solid #000;

`



export  function ListaDeProdutos({titulo,Produtos}:listaProdutos){
  const navigate = useNavigate();

   const [carrinho, setCarrinho] =  useRecoilState(statusCarrinho);
   const [estoque, setEstoque] = useRecoilState(listaDeProdutos);

    function sacolaCompra(produtos:Props){
    const novoCarrinho = addCarrinho(carrinho,produtos);
    setCarrinho(novoCarrinho);
      console.log("carrinho:",carrinho)
    const estoqueProduto= diminuiEstoque(estoque, produtos);
    setEstoque(estoqueProduto); 
    console.log("estoque",estoque) 

    
   
    
  }



  function redirecionarParaDetalhes(produtos:Props){
   
   navigate(`/detalhes/${produtos.id}`, {state:{produtos},replace:true});
  } 

 return(


<>


<Titulo>{titulo}</Titulo>
<Secao>

{Produtos.map((item) =>(
   
  
  <div className='cartao' key={item.id}> 
      <ContainerBorda>
        <SecaoImagem width="100"  src={item.imagens[0].url} alt={item.imagens[0].descricao}/>
        <TamanhosDisponivel tamanhos={item.tamanhos_disponiveis}/>
      </ContainerBorda>
      <Link to={`/detalhes/${item.id}`} onClick={()=>redirecionarParaDetalhes(item)}>
        <Titulo>{item.nome}</Titulo>
        <DescricaoItems >R${item.preco}</DescricaoItems>
      </Link>
    
    <BotaoSacola  onClick={()=>sacolaCompra(item)}>POR NA SACOLA</BotaoSacola>


  </div>
))}
</Secao>
</>

)}