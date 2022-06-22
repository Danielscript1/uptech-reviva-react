import styled from 'styled-components';

export const Secao = styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 999px){
      grid-template-columns: repeat(2, 1fr);

    }
    @media screen and (max-width: 578px){
      grid-template-columns: repeat(1,1fr);

    }

    
`;

export const ContainerBorda = styled.section`
    border: 1px solid #000;

`