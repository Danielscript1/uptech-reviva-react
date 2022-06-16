import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';


export default function Navbar(){
  
   const rotas = [
      { 
        label:'Pagina Inicial',
        to:'/'
      },{
        label:'Masculina',
        to:'#'
      },{
        label:'Moda Feminina',
        to:'#'
      },
      {
         label:'Moda Infantíl',
         to:'#'
       }
       ,
      {
         label:'Manual de Moda',
         to:'#'
       }
    ];

return(
  <nav className={style.navegacao}>
       
          <ul className={style.navegacao__opcoes} >
              {rotas.map((rotas,index)=>(
                  <li key={index} className={style.nav__item_menu}>
                     <Link to={rotas.to} className={style.link}>
                        {rotas.label}
                     </Link>

                  </li>
              ))}
           </ul>
          

        </nav>
)

}