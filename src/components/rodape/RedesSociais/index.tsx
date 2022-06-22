import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import { Icones } from 'Interfaces/Icones';
import { Icone, Titulo } from 'styles';
import { Redes } from './style';






export default function RedesSociais({menu}:Icones){


  

  return(
    <Redes>
        <Titulo>{menu}</Titulo>
        <Icone src={ getPublicImageUrl("icons","facebook.svg")} alt="Icone Facebook" />
        <Icone src={getPublicImageUrl("icons","twitter.svg")} alt="Icone Twitter"/>
        <Icone src={ getPublicImageUrl("icons","youtube.svg")} alt="Icone Youtube" />
        <Icone src={ getPublicImageUrl("icons","insta.svg")} alt="TIcone Instagram" />
     
    </Redes>
  )
}

