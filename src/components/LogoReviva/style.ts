import styled from 'styled-components';
import { subTituloCabecalho, tituloCabecalho } from 'styles/variaveis';

export const Logo = styled.h1`
display: grid;
font-size: ${tituloCabecalho};
grid-template-columns: max-content;

.subTitulo{
  justify-self: end;
   font-size: ${subTituloCabecalho};
}
`;
