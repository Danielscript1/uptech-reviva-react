import { Titulo } from 'styles';
import  { Descricao } from 'components/painel';
import {ContainerBlog,Imagens,SecaoDivisao} from  './style';



export default function Blog(){
  return(
    

    <ContainerBlog >
        <figure>

            <Imagens src={process.env.PUBLIC_URL + "img/blog/painel.png"} width="100"/>
            <Titulo>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverso e continuar na moda!</Titulo>

        </figure>

        <section>

            <SecaoDivisao >
            <Imagens src={process.env.PUBLIC_URL + "img/blog/loja.jpg"}/>
            <Descricao className="painel__descricao">O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverso e continuar na moda!</Descricao>
            </SecaoDivisao>  
            <SecaoDivisao >
            <Imagens src={process.env.PUBLIC_URL + "img/blog/loja.jpg"}/>
            <Descricao>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverso e continuar na moda!</Descricao>
            </SecaoDivisao>  
        </section>

    </ContainerBlog>  

      
  
  )
}