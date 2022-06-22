import styled from 'styled-components';
import { corPrimaria } from 'styles/variaveis';

export const PainelPrincipal = styled.section`
    width: 100%;
    overflow: hidden;
    color: #fff;

`;

export const SecaoPainel = styled.div`
        display: grid;
        text-align: center;
        grid-template-rows: repeat(3, 1fr);
        padding: 2rem;
        background-color: ${corPrimaria};
        font-size: 3rem;
        

`;

export const ContainerLogo = styled.figure`
  display: grid;
  justify-items: end;
        
`;

