import { Icamisas } from 'Interfaces/ICamisasTamanhos';
import styled from 'styled-components';

const Disponivel = styled.div`
  display: flex;
  justify-content: end;
  text-align: center;
 
`;

const OpcoesTamanho:any = styled.label`
  appearance: none;
  border:1px solid #000;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 1.5rem;
  margin: 0.2rem;
  height: max-content;
 
  
  &:hover {
    background-color: red;
    color: #fff;
    font-weight: 400;
     }
     
  
`;




export default function TamanhosDisponivel ({tamanhos}:Icamisas){

  return(
    <Disponivel>
    {tamanhos.map((tamanho,index) =>  (
          
          <OpcoesTamanho  key={index} type="radio"  name="tamanho" value={tamanho}>
            {tamanho}
            
          </OpcoesTamanho>
      
      ))}
          
    </Disponivel>
  )
}

