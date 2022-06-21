import styled from 'styled-components';
import { carrinho } from 'common/utils/produtosCarrinhos';
import { useRecoilValue } from 'recoil';
import BotaoSacola from '../../BotaoSacola';

const SecaoTotal = styled.section`
    display: flex;
    width: 50%;

`;

const SecaoTotalInformacoes = styled.section`
        display: flex;
        flex-direction: column;
        gap: 4rem;
        padding: 2rem;
        background-color: rgb(200, 173, 173);

`;

const SecaoTotalDivisao = styled.section`
            display: flex;
            justify-content: space-between;
            font-size: 3rem;

`;

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