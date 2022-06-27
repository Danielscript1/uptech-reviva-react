import React,{ createContext, ReactNode, useContext, useState } from 'react';
import { Produtos } from 'common/utils/data';
import IListaProdutos from 'Interfaces/IListaProdutos';




interface ProdutosProviderProps{
  children: ReactNode; 
}


interface ProdutosContextProps{
  produt : IListaProdutos[],
  setProdutos:(produtos:IListaProdutos[])=>void
}


export const ProdutosContext = createContext<ProdutosContextProps>({produt:[],setProdutos: (produtos: IListaProdutos[])=>[]});
ProdutosContext.displayName= "listaProdutos";
export default function ProdutosProvider({ children }:ProdutosProviderProps){
  const [produt, setProdutos] = useState< IListaProdutos[]>(Produtos);

  
return(
  <ProdutosContext.Provider value={{produt,setProdutos}}>
    {children}
  </ProdutosContext.Provider>

)
 
 
}

export function useProdutoContext() {
  const {
    produt,
    setProdutos
  } = useContext(ProdutosContext);



  function removerEstoque(id:number) {

    const temOProduto = produt.findIndex(item => item.id === id);
    let deposito = [...produt];
    if (temOProduto) {
     
     deposito[temOProduto].quantidade_disponivel = deposito[temOProduto].quantidade_disponivel -= 1;
      return setProdutos(deposito);

     
    }
  }

return {
  setProdutos,
  removerEstoque
  }

}