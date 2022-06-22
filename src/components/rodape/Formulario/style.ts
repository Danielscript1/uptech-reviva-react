import styled from 'styled-components';

export const CampoFormulario = styled.section`

  font-size: 2rem;
  width: max-content;

  @media screen and (max-width: 700px){
    display: flex;
    margin: auto;
    h1{
      display:none;
    }
  }

`;

export const Assine = styled.input`
    width: 50%;
    height: 20%;

`;

export const Botao = styled.button`
    width: 50%;
    height: 20%;
`;