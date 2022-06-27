

export const CalculoTotal = (produtos:any) =>{
 console.log("produtos",produtos)
  const total = produtos.reduce(

    (acc: number, item: { preco: number; quantidade_disponivel: number; }) => acc + (item.preco * item.quantidade_disponivel),

    0

  );

  return total.toFixed(2);
}
    
  
 