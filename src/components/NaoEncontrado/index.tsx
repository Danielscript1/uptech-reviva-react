import Main from 'components/Main';
export function NaoEncontrado(){
  return(
    <Main>
      <img src={process.env.PUBLIC_URL + 'img/not_found.svg'}></img>
    </Main>
  )


}