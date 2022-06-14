import { imagens } from 'components/ListaProdutos';


export const diminuiEstoque = (produto: any, item: {

        id: number;
         nome:string;
         url:string;
         descricao:string;
         preco:number;
         tamanhos_disponiveis:string[];
         secaoProdutos:number;
         imagens:imagens[]}
   ) => {

    const copiaProdutoCarrinho = [...produto];

    const items = copiaProdutoCarrinho.findIndex((produto:{id:number;})=>produto.id === item.id);
   
    if(items !== -1){
      
        copiaProdutoCarrinho[items] = {
  
          ...produto[items],
        
          quantidade_disponivel: produto[items].quantidade_disponivel-1,
          
        
        }
        return copiaProdutoCarrinho;
     
    
    };
    return copiaProdutoCarrinho;
  }