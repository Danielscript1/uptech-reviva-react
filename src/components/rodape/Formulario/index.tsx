import { Icones } from 'Interfaces/Icones';
import { Titulo } from 'styles';
import {CampoFormulario,Assine,Botao} from  './style';



export function Formulario({menu}:Icones){
  return(
    
    <CampoFormulario>
    <Titulo >{menu}</Titulo>
    <Assine type="text" />
    <Botao>ASSINAR JÁ</Botao>
    </CampoFormulario>
    

   
     
    
  )
}