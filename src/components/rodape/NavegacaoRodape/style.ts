import styled from 'styled-components';
import { corSecundario } from 'styles/variaveis';

export  const Navegacao = styled.nav `
  display:flex;
  //height: max-content;
  flex-direction: column;
 
  `;

export const ItemsNavegacao = styled.li`
            margin: 1rem 0rem;
            list-style: none;
            font-size: 2rem;
            flex-direction: column;
            display: flex;
            a{
               color:${corSecundario};
               &:hover {
                    color: aqua;
                }
            }
            
 `;  