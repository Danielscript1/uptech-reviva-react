import { Link } from 'react-router-dom';  
import { IconeSacola } from 'styles';
import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import LogoReviva from 'components/LogoReviva';
import {SecaoHeader} from  './style';





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