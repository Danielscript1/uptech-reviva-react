import style from './Botao.module.scss';
import styled from 'styled-components';
import { Icone } from 'styles';
import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';

const ArePesquisa = styled.section`
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 5rem;

`;

const ConteudoPesquisa = styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 2rem;
        font-size: 2rem;
       
      
      
`;

const  Pesquisa = styled.input`

            margin-right: 8px;
            width: 100%;

`; 





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