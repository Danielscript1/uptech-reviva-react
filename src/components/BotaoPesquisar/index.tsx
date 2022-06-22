import { Icone } from 'styles';
import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import {ArePesquisa,ConteudoPesquisa,Pesquisa} from  './style';



export default function BotaoPesquisar(){
  return(
    <ArePesquisa >
            <ConteudoPesquisa>

                <Pesquisa  type="search " placeholder="Faça sua busca aqui se já souber o que está procurando... "/>
                <Icone src={getPublicImageUrl("icons","search-icon.svg")} alt="Botão pesquisar" width={70} height={40} color="rgba(0,0,0,0.87)"/>

            </ConteudoPesquisa>

      </ArePesquisa>
  )

}