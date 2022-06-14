interface imagens{
  url:string;
  descricao:string;
}

export default interface Props{
  id:number;
  nome:string;
  url:string;
  preco:number;
  descricao:string;
  tamanhos_disponiveis:string[];
  quantidade_disponivel:number;
  secaoProdutos:number;
  subTotal?:number,
  imagens:imagens[]
}