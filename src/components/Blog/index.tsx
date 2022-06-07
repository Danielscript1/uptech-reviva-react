import style from './Blog.module.scss';
export default function Blog(){
  return(
    <section className={style.painel__centro}>


    <div className={style.painel__central}>
        <figure>

            <img src={process.env.PUBLIC_URL + "img/blog/painel.png"} className={style.imagem__total}/>
            <p className={style.painel__descricao}>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverso e continuar na moda!</p>

        </figure>

        <section className={style.painel__subsecao}>

            <section className={style.painel__divisao}>
            <img src={process.env.PUBLIC_URL + "img/blog/loja.jpg"}/>
            <p className="painel__descricao">O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverso e continuar na moda!</p>
            </section>  
            <section className={style.painel__divisao}>
            <img src={process.env.PUBLIC_URL + "img/blog/loja.jpg"}/>
            <p className="painel__descricao">O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverso e continuar na moda!</p>
            </section>  

        </section>  

      </div>   
  </section>   
  )
}