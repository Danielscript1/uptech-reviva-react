import { rotas } from 'common/utils/rotas';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { corPrimaria,tamanhoTextoNavegacao ,corSecundario} from 'styles/variaveis';




 const Navegacao = styled.nav`
        display: flex;
        align-items: center;
        height: 4.8rem;
        background-color: ${corPrimaria};
        justify-content: space-around;
      .opcoesNavegacao{  
        display: flex;
        font-size: ${tamanhoTextoNavegacao};
        }  
       
   
   `; 

 const ItemsNavegacao = styled.li`
            margin: 1rem;
            list-style: none;
            a{
               color:${corSecundario};
               &:hover {
                    color: aqua;
                }
            }
          
              
 `;  





export default function Navbar(){
 

return(
  <Navegacao >
            
          <ul  className="opcoesNavegacao">
              {rotas.map((rotas,index)=>(
                  <ItemsNavegacao key={index} >
                     <Link to={rotas.to}>
                        {rotas.label}
                     </Link>

                  </ItemsNavegacao>
              ))}
           </ul>
          

   </Navegacao>
)

}