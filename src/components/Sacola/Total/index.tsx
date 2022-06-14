
import { carrinho } from 'common/utils/produtosCarrinhos';
import { useRecoilValue } from 'recoil';
import style from "./Total.module.scss";




export default function Total({total}:any){

  const produtosSacola = useRecoilValue(carrinho);

  return(
          <section className={style.total}>

                    <section className={style.total__informacoes}>
                        <section className={style.total__divisao}>
                            <p>Total</p>
                            <p>R${total}</p>
                        </section>
                         
                        {produtosSacola.map(item =>(
                          
                          
                           <p>  {item.quantidade_disponivel} x {item.preco} = {item.quantidade_disponivel*item.preco} </p>
                          
                           
                          
                        ))}
                                            
                        
                        
                       
                        
                        <button>Ir para pagamento</button>
                    </section>



          </section>

            
  )
}