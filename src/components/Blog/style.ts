import styled from 'styled-components';

export  const ContainerBlog = styled.section`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr 2fr);
    font-size: 5rem;
    @media screen and (max-width: 992px){
      grid-template-columns: auto;
    }


`;


export const Imagens = styled.img`
  width:  ${(props)=> props.width === '100' ? '100%': '20%'  };
  @media screen and (max-width: 998px){
     width: 100%;
    }
 
`;

export const SecaoDivisao = styled.section`

    display: flex;
    margin-bottom: 1rem;
    font-size: 3rem;
    @media screen and (max-width: 998px){
      display: flex;
      flex-direction: column;
    }


`;