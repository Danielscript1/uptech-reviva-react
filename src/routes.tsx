import Header from 'components/Header';
import { NaoEncontrado } from 'components/NaoEncontrado';
import Navbar from 'components/navbar';
import PaginaPadrao from 'components/PaginaPadrao';
import Rodape from 'components/rodape';
import Carrinho from 'pages/carrinho';
import DetalhesProdutos from 'pages/DetalheProdutos';
import Home from 'pages/home';
import {BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

export default function AppRouter(){
 return(
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<PaginaPadrao/>}>
        <Route index element={<Home/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/detalhes/:id" element={<DetalhesProdutos/>}/>
      </Route>
      <Route path='*' element={<NaoEncontrado/>}/>
     
    </Routes>
    <Rodape/>
  </Router>
 )
}