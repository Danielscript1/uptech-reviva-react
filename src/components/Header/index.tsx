import style from './Header.module.scss';
export default function Header(){
  return(
    <section className={style.titulo}>
    <section className={style.titulo__cabecalho}>
        <h1>Reviva Fashion</h1>
        <span className={style.subtitulo}>by RCHLO</span>
    </section>

    <a href="#">
        <img  src={process.env.PUBLIC_URL + 'img/icons/shopping.svg'} alt="sacola de compra" />
    </a>
    
</section>
  )
  
  }