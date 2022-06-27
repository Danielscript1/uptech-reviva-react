import {ListaDeProdutos} from 'components/ListaProdutos';
import React, { useContext, useEffect, useState } from 'react';
import Blog from '../../components/Blog';
import BotaoPesquisar from '../../components/BotaoPesquisar';
import Painel from '../../components/painel';
import ProdutosProvider, {ProdutosContext} from 'contexts/produtosContext';
import { CarrinhoProvider } from 'contexts/carrinhoContext';






function Home() {
 
 
  const {produt} = useContext(ProdutosContext);
  console.log(produt)
  const secaoProdutos1 = produt.filter(produto => produto.secaoProdutos === 1) ;
  console.log(secaoProdutos1)
  const secaoProdutos2 = produt.filter(produto => produto.secaoProdutos === 2) ;
    
  return(
    <>

  
     
      <BotaoPesquisar/>
        <ListaDeProdutos titulo='Últimos lançamentos'  Produtos={secaoProdutos1}/>
        <Painel/>
        <ListaDeProdutos titulo='Coleção de Verão 2022' Produtos={secaoProdutos2}/>
        <Blog/>
    
       
   
       
       
       
   
    </>
   
    
  )
}

export default Home;