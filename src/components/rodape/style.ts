import styled from 'styled-components';
import { corPrimaria, corSecundario } from 'styles/variaveis';

export const Footer = styled.footer`

width: 100%;
background-color: ${corPrimaria};
color:${corSecundario};
display: grid;
padding:3rem;
grid-template-rows: repeat(1, 1fr);

`

export const Grid = styled.div`
    display: grid;
    gap:2;
    grid-template-columns: repeat(4,1fr);
    @media screen and (max-width: 700px){
      grid-template-columns: repeat(1,1fr);
      text-align: center;
    }
   


`;

