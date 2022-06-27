import IListaProdutos from "Interfaces/IListaProdutos";
import { Link } from 'react-router-dom';
import TamanhosDisponivel from 'components/TamanhosDisponivel';
import BotaoSacola from '../BotaoSacola';
import { useNavigate } from 'react-router-dom';
import {Titulo,DescricaoItems,SecaoImagem } from 'styles/index';
import {Secao,ContainerBorda} from  './style';
import {CarrinhoProvider, useCarrinhoContext} from 'contexts/carrinhoContext';



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




export  function ListaDeProdutos({titulo,Produtos}:listaProdutos){
  console.log(Produtos)
  const navigate = useNavigate();

    const {carrinho,setCarrinho,adicionarProduto} = useCarrinhoContext();
   
   
  

  function redirecionarParaDetalhes(produtos:Props){
   
   navigate(`/detalhes/${produtos.id}`, {state:{produtos},replace:true});
  } 

 return(


<>




<Titulo>{titulo}</Titulo>
<Secao>

{Produtos.map((item) =>(
     
  
  <div  key={item.id}> 
      <ContainerBorda>
        <SecaoImagem width="100"  src={item.imagens[0].url} alt={item.imagens[0].descricao}/>
        <TamanhosDisponivel tamanhos={item.tamanhos_disponiveis}/>
      </ContainerBorda>
      <Link to={`/detalhes/${item.id}`} onClick={()=>redirecionarParaDetalhes(item)}>
        <Titulo>{item.nome}</Titulo>
        <DescricaoItems >R${item.preco}</DescricaoItems>
      </Link>
      <BotaoSacola  onClick={()=>adicionarProduto(item)}>POR NA SACOLA</BotaoSacola>
    
   


  </div>
))}
</Secao>



</>

)}