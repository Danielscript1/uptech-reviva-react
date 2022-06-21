import { CalculoTotal } from 'common/funcoes/calculoTotalCarrinho';
import { carrinho } from 'common/utils/produtosCarrinhos';
import IListaProdutos from 'Interfaces/IListaProdutos';
import styled from 'styled-components';
import style from "./ItemSacola.module.scss";
import {SecaoImagem,Titulo,DescricaoItems} from '../../../styles/index';
import TamanhosDisponivel from 'components/TamanhosDisponivel';



const CompraCategoria = styled.section`
     display: grid;
     grid-template-columns: repeat(6, 1fr);
     width: 100%;
     gap: 0.8rem;
     margin-bottom: 2rem;

`;




export default function ItemSacola(props:IListaProdutos){
    const {nome,url,preco,descricao,tamanhos_disponiveis,quantidade_disponivel,subTotal,imagens} = props;
  return(
   <>
   
       <CompraCategoria >
                       
                            <SecaoImagem src={imagens[0].url} width="100" />
                        
                        <section>
                            <Titulo>{nome}</Titulo>
                            <DescricaoItems>{descricao}</DescricaoItems>
                        </section>
                        <TamanhosDisponivel tamanhos={tamanhos_disponiveis}></TamanhosDisponivel>
                        <section>
                            <Titulo>Valor</Titulo>
                            <DescricaoItems>R$ {preco}</DescricaoItems>
                        </section> 
                        <section>
                            <Titulo>Quantidade</Titulo>
                            <input type="number"   size={2}/>
                        </section>
                        <section>
                            <Titulo>Subtotal</Titulo>
                            <DescricaoItems id="total">R$ 39,90</DescricaoItems>
                        </section>

        </CompraCategoria>
   
   </>
  )
}