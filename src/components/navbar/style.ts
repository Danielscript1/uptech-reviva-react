import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { corPrimaria, corSecundario } from 'styles/variaveis';

export const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

export const MenuBotao = styled.label`

@media screen and (max-width: 834px){
  background-color: ${COLORS.primaryLight};
  position: absolute;
   top: 16rem;
   right: 2rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
}

`;
export const Navegacao = styled.nav<any>`
        display: flex;
       align-items: center;
       height: 4.8rem;
       background-color: ${corPrimaria};
       justify-content: space-around;
 @media screen and (max-width: 834px){
     height: 100vh;
     position: absolute;
     height: 80%;
     width: 100%;
     z-index: 600;
     width: ${(props) => (props.clicked ? "100%" : "0")};
     opacity: ${(props) => (props.clicked ? "1" : "0")};
     transition: width 0.8s, opacity 0.8s;
     background-color: rgba(0,0,0,0.87);
 }
`;

export const Lista = styled.ul`
   display: flex;
   margin: 1rem;
   list-style: none;
   a{
    color:${corSecundario};
      &:hover {
       color: aqua;
               }
         }
@media screen and (max-width: 834px){

 position: absolute;
 list-style: none;
 flex-direction: column;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 text-align: center;
 height: 100vh;
 width: 100%;
 justify-content: center;
 
}
`;

export const ItemLink = styled(NavLink)`
 display: inline-block;
 font-size: 2rem;
 font-weight: 300;
 text-decoration: none;
 color: ${COLORS.primaryLight};
 padding: 1rem 2rem;
 background-image: linear-gradient(
   120deg,
   transparent 0%,
   transparent 50%,
   #fff 50%
 );
 background-size: 240%;
 transition: all 0.4s;
 &:hover,
 &:active {
   background-position: 100%;
   color: ${COLORS.primaryDark};
   transform: translateX(1rem);
 }

`;
export const Icon = styled.span<any>`
display: none;
@media screen and (max-width: 834px){

 position: relative;
 background-color: ${(props) => (props.clicked ? "transparent" : "black")};
 width: 3rem;
 height: 2px;
 display: inline-block;
 margin-top: 3.5rem;
 transition: all 0.3s;
 &::before,
 &::after {
   content: "";
   background-color: black;
   width: 3rem;
   height: 2px;
   display: inline-block;
   position: absolute;
   left: 0;
   transition: all 0.3s;
 }
 &::before {
   top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
   transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
 }
 &::after {
   top: ${(props) => (props.clicked ? "0" : "0.8rem")};
   transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
 }
 ${MenuBotao}:hover &::before {
   top: ${(props) => (props.clicked ? "0" : "-1rem")};
 }
 ${MenuBotao}:hover &::after {
   top: ${(props) => (props.clicked ? "0" : "1rem")};
 }
}
`;