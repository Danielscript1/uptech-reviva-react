import style from './Rodape.module.scss';
export default function Rodape(){
  return(
    <>
    <section className={style.titulo__rodape}>
    <h1>Reviva Fashion</h1>
    <span className={style.subtitulo__rodape}>by RCHLO</span>

</section>

<section className={style.menu__rodape}>

    <nav>
    <b className={style.centralizar}>Menu</b>
        <ul>
            <li className={style.nav__item}>
                <a className={style.item__link} href="#"></a>
            </li>
            <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Pagina Inicial</a></li>
            <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Masculina</a></li>
            <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Moda Feminina</a></li>
            <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Moda Infantíl</a></li>
            <li className={style.nav__item_rodape}><a className={style.item__link} href="#">Manual de Moda</a></li>
        </ul>


    </nav>
    <section className={style.redes}>
        <p><b className={style.tamanho__texto}>Siga-nos nas redes sociais</b></p>
        <img src={process.env.PUBLIC_URL + "img/icons/facebook.svg"}/>
        <img src={process.env.PUBLIC_URL + "img/icons/twitter.svg"}/>
        <img src={process.env.PUBLIC_URL + "img/icons/youtube.svg"}/>
        <img src={process.env.PUBLIC_URL + "img/icons/insta.svg"}/>
    </section>

    <section >
        <nav className={style.contatos}>
            <b className={style.centralizar}>Entre em contato</b>
            <ul >
                <li className={style.nav__item_rodape}> <a className={style.item__link} href="#">reviva@rchlo.com.br</a> </li>
                <li  className={style.nav__item_rodape}> <a className={style.item__link} href="#">WhatsApp <img src={process.env.PUBLIC_URL + "img/icons/whats.svg"}/></a></li>
                <li  className={style.nav__item_rodape}><a className={style.item__link} href="#">11 2123-3321 <img src={process.env.PUBLIC_URL + "img/icons/phone.svg"}/></a> </li>

            </ul>

        </nav>

    </section>

    <section className={style.Assinar}>

        <b className={style.tamanho__texto}>Assine nossa newsletter</b>
        <input type="text"></input>
        <button className={style.botao__rodape}>ASSINAR JÁ</button>

    </section>

</section>
</>
  )
}