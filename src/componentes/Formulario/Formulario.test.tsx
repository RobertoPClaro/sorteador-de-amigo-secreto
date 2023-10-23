import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Formulario from './Formulario'
import { RecoilRoot } from 'recoil'

describe('o comportamento do Formulario.tsx', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        // Arrange
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        // Act 
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        // encontrar o botão 
        const botao = screen.getByRole('button')

        //Assert 
        // garatir que o input esteja no documento
        expect(input).toBeInTheDocument()

        // garatir que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    })

    test('qadicionar um participante caso exista um nome preenchido', () => {
        // Arrange
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        // Act 
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        // encontrar o botão 
        const botao = screen.getByRole('button')

        //Assert 
        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })

        //clicar no botão de submeter 
        fireEvent.click(botao)

        //garantir que o input esteja com o foca ativo
        expect(input).toHaveFocus()

        //garatir que o input não tenha um valor 
        expect(input).toHaveValue('')
    })

    test('nomes duplicados não podem ser adicionados na lista', () => {
        // Arrange
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        // Act 
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        // encontrar o botão 
        const botao = screen.getByRole('button')

        //Assert 
        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })



        //clicar no botão de submeter 
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(botao)

        const menssagemDeErro = screen.getByRole('alert')

        expect(menssagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(botao)
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers()
        });
    
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})