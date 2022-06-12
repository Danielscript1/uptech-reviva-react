import style from "./Total.module.scss";
export default function Total(){
  return(
          <section className={style.total}>

                    <section className={style.total__informacoes}>
                        <section className={style.total__divisao}>
                            <p>Total</p>
                            <p>R$</p>
                        </section>
                        
                        <p>1 x 39,90 = 39,90</p>
                        <p>1 x 39,90 = 39,90</p>
                       
                        
                        <button>Ir para pagamento</button>
                    </section>



          </section>

            
  )
}