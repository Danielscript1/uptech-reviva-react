import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import {Formulario} from "../../components/rodape/Formulario";

// Jest
describe('o comportamento do Formulario.tsx', () => {
    test('os componetes foram rederizado, o botão esta habilitado  para novos assinantes,inserir nome no input', () => {

        render(<Formulario menu={''} />)

        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Assine Agora')

        // encontrar o botão
        const botao = screen.getByRole('button')

         // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'adicionar Assinatura'
            }
        })

        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        // garantir que o botão esteja habilitado
        expect(botao).toBeEnabled();

    })

    

  })


