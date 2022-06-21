import { Link } from 'react-router-dom';  
import styled from 'styled-components';
import { IconeSacola } from 'styles';
import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import LogoReviva from 'components/LogoReviva';




const SecaoHeader = styled.section`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 4rem;

`;







const Header = () =>{

 
  return(
    <SecaoHeader>
      <LogoReviva/>
      <Link to='/carrinho'> 
        <IconeSacola  src={ getPublicImageUrl("icons","shopping.svg")} alt="sacola de compra"/>
      </Link>
    </SecaoHeader>
  )
  
  }

  export default Header;