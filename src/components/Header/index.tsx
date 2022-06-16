import style from './Header.module.scss';
import { Link } from 'react-router-dom';  

export default function Header(){

 
  return(
    <section className={style.titulo}>
    <section className={style.titulo__cabecalho}>
        <h1>Reviva Fashion</h1>
        <span className={style.subtitulo}>by RCHLO</span>
    </section>

    <Link to='/carrinho'>
        <img  src={process.env.PUBLIC_URL + 'img/icons/shopping.svg'} alt="sacola de compra" />
    </Link>
    
</section>
  )
  
  }