import {ListaDeProdutos} from 'components/ListaProdutos';
import Main from 'components/Main';
import React, { useEffect, useState } from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import {listaDeProdutos} from 'common/utils/data';
import Blog from '../../components/Blog';
import BotaoPesquisar from '../../components/BotaoPesquisar';
import Painel from '../../components/painel';





function Home() {
 
 
  const produtos = useRecoilValue(listaDeProdutos);
  const secaoProdutos1 = Object.values(produtos).filter(produto => produto.secaoProdutos === 1) ;
  const secaoProdutos2 = Object.values(produtos).filter(produto => produto.secaoProdutos === 2) ;
    
  return(
    <>

    <RecoilRoot>  
       
        <BotaoPesquisar/>
        <ListaDeProdutos titulo='Últimos lançamentos'  Produtos={secaoProdutos1}/>
        <Painel/>
        <ListaDeProdutos titulo='Coleção de Verão 2022' Produtos={secaoProdutos2}/>
        <Blog/>
       
       
      </RecoilRoot>
    </>
   
    
  )
}

export default Home;