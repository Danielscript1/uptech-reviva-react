import { CarrinhoContext, useCarrinhoContext } from 'contexts/carrinhoContext';
import BotaoSacola from '../../BotaoSacola';
import {SecaoTotal,SecaoTotalInformacoes,SecaoTotalDivisao} from  './style';



export default function Total({total}:any){
  const {carrinho,setCarrinho,adicionarProduto} = useCarrinhoContext();

  return(
          <SecaoTotal >

                    <SecaoTotalInformacoes>
                        <SecaoTotalDivisao >
                            <p>Total</p>
                            <p>R${total}</p>
                        </SecaoTotalDivisao>
                         
                        {carrinho.map(item =>(
                          
                          
                           <p>  {item.quantidade_disponivel} x {item.preco} = {item.quantidade_disponivel*item.preco} </p>
                          
                           
                          
                        ))}
                                            
                        
                        
                       
                        
                        <BotaoSacola onClick={()=>(adicionarProduto)}>Ir para pagamento</BotaoSacola>
                    </SecaoTotalInformacoes>



          </SecaoTotal>

            
  )
}