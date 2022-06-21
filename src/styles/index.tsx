import styled, { StyledComponent } from 'styled-components';


export const IconeSacola = styled.img`
    height: ${props=> `px`};
    width: ${props=> `px`};
   
`;

export const Icone = styled.img`
height: ${props=>  `px`};
width: ${props=> `px`};
background-color:${props => props.color};
`;

export const Titulo = styled.h1`
height: max-content;
font-size: 2rem;
`;

export const DescricaoItems = styled.p`
font-size:2rem;

`;

export const SecaoImagem = styled.img<any>`
width: ${(props)=> props.width === '100' ? '100%': '20%'  };

`;






