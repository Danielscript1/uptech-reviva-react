export const carrinho = [
  { 
    id:0,  
    nome: 'Camiseta Social Masculina',
    url: 'camiseta-social',
    preco: 39.90,
    descricao: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
    tamanhos_disponiveis: ['P', 'M', 'G'],
    quantidade_disponivel: 12,
    subTotal:0,
    imagens: {
         url: process.env.PUBLIC_URL + 'img/camisa6.png',
         descricao: 'camiseta social masculina no tamanho p' 
    },
},

{   id:1,  
    nome: 'Camiseta Molentom',
    url: 'camiseta-molentom',
    preco: 39.90,
    descricao: 'A Camiseta molentom é linda para ser usada em qualquer lugar',
    tamanhos_disponiveis: ['P', 'M', 'G'],
    quantidade_disponivel: 12,
    subTotal:0,
    imagens: 
        { url: process.env.PUBLIC_URL + 'img/camisa3.png',
         descricao: 'camiseta molentom  tamanho p' }
    
}
]