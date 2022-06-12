import ItemSacola from './ItemSacola';
import Total from './Total';
import style from './Sacola.module.scss';
import {carrinho} from "common/utils/produtosCarrinhos";




export default function Sacola(){
 
  return(
    
     <div className={style.compra}>
      <div>
      {carrinho.map(item =>(
         <ItemSacola
         key={item.id}
         {...item}
         />
      ))}
      </div>
      <Total/>
      </div>
  

  )
}