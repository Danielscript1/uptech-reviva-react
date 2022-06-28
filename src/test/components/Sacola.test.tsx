import { CalculoTotal } from 'common/funcoes/calculoTotalCarrinho';
import { Produtos } from 'common/utils/data';
describe('Testando funcao Calcular Total', () => {
    test('valor total de estoque  Produtos', () => {

       



        const Total = CalculoTotal(Produtos)
       
            expect("3830.40").toEqual(Total)
        

    })
})