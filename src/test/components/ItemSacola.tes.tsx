
import { Produtos } from 'common/utils/data';
import { useCarrinhoContext } from 'contexts/carrinhoContext';
describe('Sacola', () => {
  const {adicionarProduto,removerProduto} = useCarrinhoContext();
    test('adicionar Produto no carrinho', () => {



        const adicionar = adicionarProduto(Produtos[0]);
       
        expect(adicionar).toBeCalled();
        

    })

    test('remover Produto do carrinho', () => {

    

        const removeProdutos = removerProduto(Produtos[0].id);
       
        expect(removeProdutos).toBeCalled();
        

    })


})


