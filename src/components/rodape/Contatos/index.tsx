import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import { Icones } from 'Interfaces/Icones';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icone, Titulo } from 'styles';
import { ItemsNavegacao, Navegacao } from '../NavegacaoRodape';



const NavegacaoContato = styled.nav(Navegacao);

export function Contatos({ menu }: Icones){
  return(
    <NavegacaoContato>
     
     <Titulo>{menu}</Titulo>
        <ItemsNavegacao>
            <Link  to="#">reviva@rchlo.com.br </Link>
            <Link  to="#">WhatsApp <Icone  src={getPublicImageUrl("icons","whats.svg")} /></Link>
            <Link  to="#">11 2123-3321 <Icone src={ getPublicImageUrl("icons","phone.svg")}/></Link>
        </ItemsNavegacao>
        
    </NavegacaoContato>
  )

}