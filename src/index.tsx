import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/GlobalStyle';
import Routes from './routes';
import ProdutosProvider from 'contexts/produtosContext';
import { CarrinhoProvider } from 'contexts/carrinhoContext';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>  
    <ProdutosProvider>
      <CarrinhoProvider>
        <Routes/>
      </CarrinhoProvider>
      
    </ProdutosProvider>   
      
  </React.StrictMode>
);


