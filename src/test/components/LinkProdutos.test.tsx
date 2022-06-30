import { render, screen, fireEvent }  from '@testing-library/react';

import { Link, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Produtos } from 'common/utils/data';



describe("<Lista de Produtos />", () => {
  test('Verificar se o o link ir para a página detalhes está funcionando corretamente', () => {
      const history = createMemoryHistory();
      history.push = jest.fn();
      render(
          <Router location={history.location} navigator={history}>
               <Link to={{
                pathname: `/detalhes/${Produtos[0].id}`
              }}>/detalhes/id</Link>

          </Router>,
       
      );
      fireEvent.click(screen.getByText(`/detalhes/id`));



        expect(history.push).toHaveBeenCalledWith(

            {

                hash: '',

                pathname: `/detalhes/${Produtos[0].id}`,

                search: '',

            },

            undefined,

        );
  })
})




