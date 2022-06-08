import React, { useEffect, useState } from 'react';
import {estoque} from '../../common/utils/data';
import Blog from '../../components/Blog';
import BotaoPesquisar from '../../components/BotaoPesquisar';
import Header from '../../components/Header';
import Navbar from '../../components/navbar';
import Painel from '../../components/painel';
import style from './Home.module.scss';

export interface Props{
  id:number;
  nome:string;
  url:string;
  preco:number;
  descricao:string;
  tamanhos_disponiveis:string[];
  quantidade_disponivel:number;
  imagens:string[];

}



function Home() {
 
 
  const[adicionar,setAdicionar] = useState<Props>();
  //adicionar sacola
  function sacolaCompra(itemSelecionado:Props){
     setAdicionar(itemSelecionado);

     produtos(itemSelecionado);
     //carrinhoCompra(itemSelecionado);
   
  }


  function produtos(itemSelecionado:Props){
    
     estoque[itemSelecionado.id].quantidade_disponivel  =  itemSelecionado.quantidade_disponivel -=1;

      console.log(estoque[itemSelecionado.id])

      carrinhoCompra(itemSelecionado);
    
      
  }

 
 
  function carrinhoCompra(itemSelecionado:Props){
   
 
    const Product = () =>{
     const [compra,setCompra] = useState<Props[]>([
       {
         id:itemSelecionado.id,
         nome:itemSelecionado.nome,
         url:itemSelecionado.url,
         preco:itemSelecionado.preco,
         descricao:itemSelecionado.descricao,
         tamanhos_disponiveis:itemSelecionado.tamanhos_disponiveis,
         quantidade_disponivel:itemSelecionado.quantidade_disponivel,
         imagens:itemSelecionado.imagens,
        
       }
 
     ]);

     const add = () =>{
       setCompra((prevState)=>[
         ...prevState,
         
        {
          id:compra.length + 1,
          nome:"",
          url:"",
          preco:0,
          descricao:"",
          tamanhos_disponiveis:[],
          quantidade_disponivel:0,
          imagens:[]
        }
       
       ]);
      
     }
   
   }
   
  
 }
 

    
  return(
    <>

      <header>
        <Header/>
        <Navbar/>

        

    </header>

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


          <button className={style.botao}  onClick={()=>sacolaCompra({
              id,
              nome,
              url,
              preco,
              descricao,
              tamanhos_disponiveis,
              quantidade_disponivel,
              imagens:[]

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


    <footer className={style.rodape}>

        <section className={style.titulo__rodape}>
            <h1>Reviva Fashion</h1>
            <span className={style.subtitulo__rodape}>by RCHLO</span>

        </section>



        <section className={style.menu__rodape}>

            <nav>
            <b className={style.centralizar}>Menu</b>
                <ul>
                    <li className={style.nav__item}>
                        <a className={style.item__link} href="#"></a>
                    </li>
                    <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Pagina Inicial</a></li>
                    <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Masculina</a></li>
                    <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Moda Feminina</a></li>
                    <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Moda Infantíl</a></li>
                    <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Manual de Moda</a></li>
                </ul>


            </nav>
            <section className={style.redes}>
                <p><b className={style.tamanho__texto}>Siga-nos nas redes sociais</b></p>
                <img src={process.env.PUBLIC_URL + "img/icons/facebook.svg"}/>
                <img src={process.env.PUBLIC_URL + "img/icons/twitter.svg"}/>
                <img src={process.env.PUBLIC_URL + "img/icons/youtube.svg"}/>
                <img src={process.env.PUBLIC_URL + "img/icons/insta.svg"}/>
            </section>

            <section >
                <nav className={style.contatos}>
                    <b className={style.centralizar}>Entre em contato</b>
                    <ul >
                        <li className={style.nav__item_rodape}> <a className={style.item__link} href="#">reviva@rchlo.com.br</a> </li>
                        <li  className={style.nav__item_rodape}> <a className={style.item__link} href="#">WhatsApp <img src={process.env.PUBLIC_URL + "img/icons/whats.svg"}/></a></li>
                        <li  className={style.nav__item_rodape}><a className={style.item__link} href="#">11 2123-3321 <img src={process.env.PUBLIC_URL + "img/icons/phone.svg"}/></a> </li>

                    </ul>

                </nav>

            </section>

            <section className={style.Assinar}>

                <b className={style.tamanho__texto}>Assine nossa newsletter</b>
                <input type="text"></input>
                <button className={style.botao__rodape}>ASSINAR JÁ</button>

            </section>

        </section>

    </footer>      

    </>
   
    
  )
}

export default Home;