import style from "./Main.module.scss";

type Props = {
  children: React.ReactNode; 
};
export default function Main(props:Props){
  return(
    <main className={style.principal}>{props.children}</main>
  )
}