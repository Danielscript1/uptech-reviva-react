import { Link } from 'react-router-dom';
import { rotas } from 'common/utils/rotas';
import { Titulo } from 'styles';
import { Icones } from 'Interfaces/Icones';
import {Navegacao,ItemsNavegacao} from  './style';



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