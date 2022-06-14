//import { Props } from 'pages/home';
import { useState } from 'react';
import {listaDeProdutos} from 'common/utils/data';
import style from "./ListaProdutos.module.scss";
import IListaProdutos from "Interfaces/IListaProdutos";
import { useRecoilState, useRecoilValue } from 'recoil';
import {  statusCarrinho } from 'common/utils/produtosCarrinhos';
import { addCarrinho } from 'state/hooks/useAdicionarCarrinho';
import { diminuiEstoque } from 'state/hooks/useDiminuiEstoque';

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

 return(


<>

<h2>{titulo}</h2>

<section className={style.secao}>



{Produtos.map((item) =>(
   
  
  <div className='cartao' key={item.id}> 
  
    
    <section className={style.cartao__conteudo}>
      <img  className='cartao__camisa'  src={item.imagens[0].url} alt={item.imagens[0].descricao}/>
   

        <div className={style.camisa__tamanhos}>
        {item.tamanhos_disponiveis.map((t,index) =>  (
              <label key={index} className={style.opcoes__tamanhos}>
                <input type="radio"  name="tamanho" value={item.tamanhos_disponiveis[index]}/>
                {item.tamanhos_disponiveis[index]}
                
              </label>
          
          ))}
              
        </div>
    </section> 

    <section className={style.cartao__info}>
      <a href="produtosDetalhes.html">
        <h3 className={style.cartao__titulo}>{item.nome}</h3>
        <p className={style.cartao__preco}>R${item.preco}</p>
      </a>
    </section>

    <section className={style.espaco__botao}>

          
    <button className={style.botao} onClick={()=>sacolaCompra(item)}>
            POR NA SACOLA <img src={process.env.PUBLIC_URL + 'img/icons/shopping.svg'} width="20px" height="20px"></img>
    </button>

    </section>

  </div>
))}
</section>
</>

)}