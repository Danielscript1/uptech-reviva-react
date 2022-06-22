import IListaProdutos from 'Interfaces/IListaProdutos';
import {SecaoImagem,Titulo,DescricaoItems} from '../../../styles/index';
import TamanhosDisponivel from 'components/TamanhosDisponivel';
import {CompraCategoria} from  './style';







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