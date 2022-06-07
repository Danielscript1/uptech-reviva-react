import style from './Botao.module.scss';
export default function BotaoPesquisar(){
  return(
    <section className={style.pesquisa}>
            <div className={style.conteudo__pesquisa}>

                <input className={style.campo__info} type="search " placeholder="Faça sua busca aqui se já souber o que está procurando... "></input>
                <img className={style.botao__lupa} src={process.env.PUBLIC_URL + 'img/icons/search-icon.svg'} alt="Botão pesquisar"></img>

            </div>

      </section>
  )

}