import ItemSacola from './ItemSacola';
import Total from './Total';
import {carrinho} from "common/utils/produtosCarrinhos";
import { useRecoilValue } from 'recoil';
import { CalculoTotal } from 'common/funcoes/calculoTotalCarrinho';
import {Compra} from  './style';




export default function Sacola(){
   const produtosSacola = useRecoilValue(carrinho);
   const total = CalculoTotal(produtosSacola);
  
  return(
    
     <Compra >
      <div>
      {produtosSacola.map(item =>(
         <ItemSacola
         key={item.id}
         {...item}
         />
      ))}
      </div>
      
      <Total total={total}  />
      </Compra>
  

  )
}