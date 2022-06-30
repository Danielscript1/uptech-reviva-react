
import { render, screen, fireEvent }  from '@testing-library/react';
import BotaoSacola from 'components/BotaoSacola';





describe('Componente lista de produtos', () => {
  
  it('adicionar no carrinho, quando o botão é clicado, passagem do nome botao,via props', () => {
    const funcaoRealizarCompra = jest.fn()
    render(<BotaoSacola children={'POR NA SACOLA'} onClick={funcaoRealizarCompra}/>)
    fireEvent.click(screen.getByText('POR NA SACOLA'))

    expect(funcaoRealizarCompra).toHaveBeenCalled()
  })
})


