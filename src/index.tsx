import Carrinho from 'pages/carrinho';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './styles/Base.module.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <Carrinho/>
    </RecoilRoot>
    
  </React.StrictMode>
);


