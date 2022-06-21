import { Icones } from 'Interfaces/Icones';
import { Titulo } from 'styles';
import styled from 'styled-components';


const CampoFormulario = styled.section`

  font-size: 2rem;
  width: max-content;

`;

const Assine = styled.input`
    width: 50%;
    height: 20%;

`;

const Botao = styled.button`
    width: 50%;
    height: 20%;
`;

export function Formulario({menu}:Icones){
  return(
    
    <CampoFormulario>
    <Titulo>{menu}</Titulo>
    <Assine type="text" />
    <Botao>ASSINAR JÁ</Botao>
    </CampoFormulario>
    

   
     
    
  )
}