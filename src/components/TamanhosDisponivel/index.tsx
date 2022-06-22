import { Icamisas } from 'Interfaces/ICamisasTamanhos';
import {Disponivel,OpcoesTamanho} from  './style';






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

