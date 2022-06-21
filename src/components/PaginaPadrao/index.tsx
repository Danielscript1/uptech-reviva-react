import Main from 'components/Main';
import Navbar from 'components/navbar';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <Navbar/>
      
      <Main>
        <Outlet/>
      </Main>
    </>
  );
}