import ItemSacola from './ItemSacola';
import Total from './Total';
import { CalculoTotal } from 'common/funcoes/calculoTotalCarrinho';
import {Compra} from  './style';
import { CarrinhoContext, CarrinhoProvider, useCarrinhoContext } from 'contexts/carrinhoContext';






export default function Sacola(){

   const {carrinho} = useCarrinhoContext();
  console.log("compras",carrinho)
  
   const total = CalculoTotal(carrinho);
  return(


   
    
       <Compra >
      <div>
      {carrinho.map(item =>(  
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