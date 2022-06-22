import { carrinho } from 'common/utils/produtosCarrinhos';
import { useRecoilValue } from 'recoil';
import BotaoSacola from '../../BotaoSacola';
import {SecaoTotal,SecaoTotalInformacoes,SecaoTotalDivisao} from  './style';



export default function Total({total}:any){

  const produtosSacola = useRecoilValue(carrinho);

  return(
          <SecaoTotal >

                    <SecaoTotalInformacoes>
                        <SecaoTotalDivisao >
                            <p>Total</p>
                            <p>R${total}</p>
                        </SecaoTotalDivisao>
                         
                        {produtosSacola.map(item =>(
                          
                          
                           <p>  {item.quantidade_disponivel} x {item.preco} = {item.quantidade_disponivel*item.preco} </p>
                          
                           
                          
                        ))}
                                            
                        
                        
                       
                        
                        <BotaoSacola onClick={()=>(produtosSacola)}>Ir para pagamento</BotaoSacola>
                    </SecaoTotalInformacoes>



          </SecaoTotal>

            
  )
}