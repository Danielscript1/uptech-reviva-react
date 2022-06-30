import IListaProdutos from 'Interfaces/IListaProdutos';
import {SecaoImagem,Titulo,DescricaoItems} from '../../../styles/index';
import TamanhosDisponivel from 'components/TamanhosDisponivel';
import {CompraCategoria} from  './style';
import { useCarrinhoContext } from 'contexts/carrinhoContext';







export default function ItemSacola(props:IListaProdutos){
    const {id,nome,url,preco,descricao,tamanhos_disponiveis,quantidade_disponivel,subTotal,imagens} = props;
    const {adicionarProduto,removerProduto} = useCarrinhoContext();
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
                            <button onClick={() => adicionarProduto(props)}>+</button>
                                {props.quantidade_disponivel}
                            <button onClick={() => removerProduto(id)}>-</button>
                            
                        </section>
                        <section>
                            <Titulo>Subtotal</Titulo>
                            <DescricaoItems id="total">R$ {(preco*quantidade_disponivel).toFixed(2).replace('.', ',')}</DescricaoItems>
                        </section>

                       
                       

        </CompraCategoria>
   
   </>
  )
}