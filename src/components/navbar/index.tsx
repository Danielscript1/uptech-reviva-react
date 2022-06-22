import { rotas } from 'common/utils/rotas';
import { useState } from 'react';
import {MenuBotao,Navegacao,Lista,ItemLink,Icon} from  './style';




export default function Navbar(){
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

return(
   <>
   
   
      <MenuBotao  onClick={handleClick}>
            <Icon clicked={click}>&nbsp;</Icon>
      </MenuBotao>
      <Navegacao  clicked={click}>
            <Lista>

           
            
              {rotas.map((rotas,index)=>(
                  <li key={index} >
                     <ItemLink to={rotas.to}>
                        {rotas.label}
                     </ItemLink>

                  </li>
              ))}
          
          </Lista>

   </Navegacao>
   </>
)

}