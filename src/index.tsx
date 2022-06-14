import Home from 'pages/home';
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
    <Home/>
    </RecoilRoot>
    
  </React.StrictMode>
);


