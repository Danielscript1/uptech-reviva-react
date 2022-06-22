import styled from 'styled-components';

export const CompraCategoria = styled.section`
     display: grid;
     grid-template-columns: repeat(6, 1fr);
     width: 100%;
     gap: 0.8rem;
     margin-bottom: 2rem;
     @media screen and (max-width: 768px){
          grid-template-columns: 1fr ;
        }

`;
