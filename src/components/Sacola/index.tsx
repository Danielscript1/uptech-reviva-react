import ItemSacola from './ItemSacola';
import Total from './Total';
import style from './Sacola.module.scss';
import {carrinho} from "common/utils/produtosCarrinhos";
import { useRecoilValue } from 'recoil';
import { CalculoTotal } from 'common/funcoes/calculoTotalCarrinho';




export default function Sacola(){
   const produtosSacola = useRecoilValue(carrinho);
   const total = CalculoTotal(produtosSacola);
  
  return(
    
     <div className={style.compra}>
      <div>
      {produtosSacola.map(item =>(
         <ItemSacola
         key={item.id}
         {...item}
         />
      ))}
      </div>
      
      <Total total={total}  />
      </div>
  

  )
}