import React, { useEffect, useState } from 'react';
import {estoque} from '../../common/utils/data';
import Blog from '../../components/Blog';
import BotaoPesquisar from '../../components/BotaoPesquisar';
import Header from '../../components/Header';
import Navbar from '../../components/navbar';
import Painel from '../../components/painel';
import Rodape from '../../components/rodape';
import style from './Home.module.scss';


interface imagens{
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
  imagens:[imagens]
}



function Home() {
 
 
  const[adicionar,setAdicionar] = useState<Props>();
  const [produtoCarrinho,setProdutoCarrinho] = useState<Props[]>([])
  
  //adicionar sacola
  function sacolaCompra(itemSelecionado:Props){
     setAdicionar(itemSelecionado);

     produtos(itemSelecionado);
   
  }

  

  function produtos(itemSelecionado:Props){
    
     estoque[itemSelecionado.id].quantidade_disponivel  =  itemSelecionado.quantidade_disponivel -=1;

      console.log(estoque[itemSelecionado.id])

      carrinhoCompra(itemSelecionado);
    
      
  }

  function carrinhoCompra(itemSelecionado:Props){

    const copiaProdutoCarrinho = [...produtoCarrinho];
    console.log("carrinho: ",copiaProdutoCarrinho)
    const item = copiaProdutoCarrinho.find((produto)=>produto.id == itemSelecionado.id);
    if(item){
      item.quantidade_disponivel =  item.quantidade_disponivel + 1;
    }else{
     copiaProdutoCarrinho.push({
      ...itemSelecionado,
     quantidade_disponivel:1

   });
    }

    setProdutoCarrinho(copiaProdutoCarrinho);
    console.log("carrinho: ",copiaProdutoCarrinho)
  }
  
 

    
  return(
    <>

    
        <Header/>
        <Navbar/>

        

    

    <main className={style.principal}>

      <BotaoPesquisar/>

    

      <h2>Últimos lançamentos</h2>

    <section className={style.secao}>

      {estoque.slice(0,4).map(({ id, nome, url, preco,descricao,tamanhos_disponiveis,quantidade_disponivel,imagens}) =>(
         
        
        <div className='cartao' key={id}> 
        
          
          <section className={style.cartao__conteudo}>
            <img  className='cartao__camisa'  src={imagens[0].url} alt={imagens[0].descricao}/>
         

              <div className={style.camisa__tamanhos}>
              {tamanhos_disponiveis.map((t,index) =>  (
                    <label key={index} className={style.opcoes__tamanhos}>
                      <input type="radio"  name="tamanho" value={tamanhos_disponiveis[index]}/>
                      {tamanhos_disponiveis[index]}
                      
                    </label>
                
                ))}
                    
              </div>
          </section> 

          <section className={style.cartao__info}>
            <a href="produtosDetalhes.html">
              <h3 className={style.cartao__titulo}>{nome}</h3>
              <p className={style.cartao__preco}>R${preco}</p>
            </a>
          </section>

          <section className={style.espaco__botao}>


          <button className={style.botao}   onClick={()=>sacolaCompra({
              id,
              nome,
              url,
              preco,
              descricao,
              tamanhos_disponiveis,
              quantidade_disponivel,
              imagens:[imagens[0]]

          })}>
                  POR NA SACOLA <img src={process.env.PUBLIC_URL + 'img/icons/shopping.svg'} width="20px" height="20px"></img>
          </button>

          </section>

        </div>
      ))}
      </section>

      <Painel/>
      <h2>Coleção de Verão 2022</h2>
      <section className={style.secao}>

{estoque.slice(4,8).map(({ id, nome, url, preco,descricao,tamanhos_disponiveis,quantidade_disponivel,imagens}) =>(
   
  
  <div className='cartao' key={id}> 
  
    
    <section className={style.cartao__conteudo}>
      <img  className='cartao__camisa'  src={imagens[0].url} alt={imagens[0].descricao}/>
   

        <div className={style.camisa__tamanhos}>
        {tamanhos_disponiveis.map((t,index) =>  (
              <label key={index} className={style.opcoes__tamanhos}>
                <input type="radio"  name="tamanho" value={tamanhos_disponiveis[index]}/>
                {tamanhos_disponiveis[index]}
                
              </label>
          
          ))}
              
        </div>
    </section> 

    <section className={style.cartao__info}>
      <a href="produtosDetalhes.html">
        <h3 className={style.cartao__titulo}>{nome}</h3>
        <p className={style.cartao__preco}>R${preco}</p>
      </a>
    </section>

    <section className={style.espaco__botao}>

    <button className={style.botao}>
            POR NA SACOLA <img src={process.env.PUBLIC_URL + 'img/icons/shopping.svg'} width="20px" height="20px"></img>
    </button>

    </section>

  </div>
))}
</section>


   <Blog/>
    

    </main>


   <Rodape/>

    </>
   
    
  )
}

export default Home;