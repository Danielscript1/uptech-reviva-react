import { tituloCabecalho,subTituloCabecalho } from 'styles/variaveis';
import styled from 'styled-components';
 
const Logo = styled.h1`
display: grid;
font-size: ${tituloCabecalho};
grid-template-columns: max-content;

.subTitulo{
  justify-self: end;
   font-size: ${subTituloCabecalho};
}
`;

const LogoReviva = () => {
    return(
      <Logo>
          Reviva Fashion
          <span className='subTitulo'>by RCHLO</span>
      </Logo>
    )
      
      
       
    
};

export default LogoReviva;
