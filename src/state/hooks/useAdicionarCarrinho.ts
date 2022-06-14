import {produtosEstoque} from "common/utils/produtosEstoque";
import { imagens } from 'components/ListaProdutos';
import IListaProdutos from 'Interfaces/IListaProdutos';






export interface listaProdutos{
  Produtos : IListaProdutos[];
  
}



export const addCarrinho = (carrinho: any,  item: { id: number; nome:string;url:string;descricao:string;preco:number;tamanhos_disponiveis:string[];secaoProdutos:number;imagens:imagens[]}) => {

 

  const copiaProdutoCarrinho = [...carrinho];

  const itemIndex = copiaProdutoCarrinho.findIndex((produto:{id:number;})=>produto.id === item.id);
 
  if(itemIndex !== -1){
   
   
      copiaProdutoCarrinho[itemIndex] = {

        ...carrinho[itemIndex],
      
        quantidade_disponivel: carrinho[itemIndex].quantidade_disponivel + 1,
        
      
      }
    }else{
        copiaProdutoCarrinho.push({

          id: item.id ,
          nome: item.nome,    
          url: item.url,
          preco: item.preco,
          descricao: item.descricao,
          tamanhos_disponiveis: item.tamanhos_disponiveis,
          quantidade_disponivel: 1,
          secaoProdutos:item.secaoProdutos,
          imagens: item.imagens

      });
       }
       
      return copiaProdutoCarrinho;
    
    };

 
   


  