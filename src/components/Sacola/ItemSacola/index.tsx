import { CalculoTotal } from 'common/funcoes/calculoTotalCarrinho';
import { carrinho } from 'common/utils/produtosCarrinhos';
import IListaProdutos from 'Interfaces/IListaProdutos';
import style from "./ItemSacola.module.scss";



export default function ItemSacola(props:IListaProdutos){
    const {nome,url,preco,descricao,tamanhos_disponiveis,quantidade_disponivel,subTotal,imagens} = props;
  return(
   <>
   
       <section className={style.compra__categoria}>
                        <picture>
                            <img src={imagens[0].url} className={style.compra__camisa}></img>
                        </picture>
                        <section>
                            <h2>{nome}</h2>
                            <p>{descricao}</p>
                        </section>
                        <div className={style.camisa__tamanhos}>
                         {tamanhos_disponiveis.map((t,index) =>  (
                         <label key={index} className={style.opcoes__tamanhos}>
                         <input type="radio"  name="tamanho" value={tamanhos_disponiveis[index]}/>
                        {tamanhos_disponiveis[index]}
                      
                       </label>
                
                      ))}
                       </div>
                        <section>
                            <h2>Valor</h2>
                            <p>R$ {preco}</p>
                        </section>
                        <section>
                            <h2>Quantidade</h2>
                            <input type="number"   size={2}/>
                        </section>
                        <section>
                            <h2>Subtotal</h2>
                            <p id="total">R$ 39,90</p>
                        </section>

                    </section>
   
   </>
  )
}