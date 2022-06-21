import { Link } from 'react-router-dom';
import { rotas } from 'common/utils/rotas';
import styled from 'styled-components';
import { corSecundario} from 'styles/variaveis';
import { Titulo } from 'styles';
import { Icones } from 'Interfaces/Icones';

export  const Navegacao = styled.nav `
  display:flex;
  //height: max-content;
  flex-direction: column;
 
  `;

export const ItemsNavegacao = styled.li`
            margin: 1rem 0rem;
            list-style: none;
            font-size: 2rem;
            flex-direction: column;
            display: flex;
            a{
               color:${corSecundario};
               &:hover {
                    color: aqua;
                }
            }
            
 `;  

export default function NavegacaoRodape({menu}:Icones){


 


  return(
    <>
    
   <Navegacao >
              <Titulo>{menu}</Titulo>
              {rotas.map((rotas,index)=>(
                  <ItemsNavegacao key={index}>
                     <Link to={rotas.to}>
                        {rotas.label}
                     </Link>

                  </ItemsNavegacao>
              ))}
           
   </Navegacao>
   </>
  )

}