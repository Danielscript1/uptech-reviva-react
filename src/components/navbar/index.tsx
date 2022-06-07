import style from './Navbar.module.scss';
export default function Navbar(){
return(
  <nav className={style.navegacao}>
          <ul className={style.navegacao__opcoes}>
               <li className={style.nav__item_menu}>
                  <a className={style.link} href="#">Pagina Inicial</a>
               </li>
               <li className={style.nav__item_menu}>
                   <a className={style.link} href="#">Masculina</a>
                </li>
                <li className={style.nav__item_menu}>
                   <a className={style.link} href="#">Moda Feminina</a>
                </li>
                <li className={style.nav__item_menu}>
                  <a className={style.link} href="#">Moda Infantíl</a>
                </li>
                <li className={style.nav__item_menu}>
                  <a className={style.link} href="#">Manual de Moda</a>
                </li>
           </ul>
          

        </nav>
)

}