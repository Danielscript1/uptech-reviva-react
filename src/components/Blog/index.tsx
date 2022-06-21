import styled from 'styled-components';
import { Titulo } from 'styles';
import  { Descricao } from 'components/painel';


const ContainerBlog = styled.section`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr 2fr);
    font-size: 5rem;


`;


const Imagens = styled.img`
  width:  ${(props)=> props.width === '100' ? '100%': '20%'  };;
 
`;

const SecaoDivisao = styled.section`

    display: flex;
    margin-bottom: 1rem;
    font-size: 3rem;


`;




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