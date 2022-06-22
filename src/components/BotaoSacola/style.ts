import styled from 'styled-components';
import { corPrimaria } from 'styles/variaveis';

export const ContainerBotao = styled.section`
    display: grid;
    padding: 0.2rem;
    grid-column: 1 span;

`;

export const Botao = styled.button`
        display: grid;
        grid-template-columns: 1fr auto;
        border: none;
        cursor: pointer;
        background-color: ${corPrimaria};
        color: #fff;
        font-size: 1.5rem;
        height: 150%;
        width: 100%;
        align-items: center; 
     

`;