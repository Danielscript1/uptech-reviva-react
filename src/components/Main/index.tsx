import styled from 'styled-components';

const Container = styled.main`
    padding: 2rem 2.5rem;
    display: grid;
    gap: 2rem;
    font-size: 3rem;

`;


type Props = {
  children: React.ReactNode; 
};
export default function Main(props:Props){
  return(
    <Container>{props.children}</Container>
  )
}