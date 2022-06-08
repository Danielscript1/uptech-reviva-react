import style from './painel.module.scss';

export default function Painel(){
  return(
<section className={style.painel}>
            <section className={style.secao__painel}>
                <p className={style.centralizarTexto}>Fique por dentro de tudo que há de novidade no mundo da moda!</p>
                <h2 className={style.centralizarTexto}>Baixe já nosso manual de moda!</h2>
                <h3 className={style.logoPainel}>Reviva Fashion</h3>
                <span className={style.logoPainel}>by RCHLO</span>
            </section>

</section>
  )
}