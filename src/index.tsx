import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/GlobalStyle';
import Routes from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RecoilRoot>
      <Routes/>
    </RecoilRoot>
    
  </React.StrictMode>
);


