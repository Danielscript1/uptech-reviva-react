import styled from 'styled-components';

export const Disponivel = styled.div`
  display: flex;
  justify-content: end;
  text-align: center;
 
`;

export const OpcoesTamanho:any = styled.label`
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