import { render, screen } from '@testing-library/react'
import React from 'react'
import Formulario from './Formulario'

//Jest

test('quando o input está vazio, novos participantes não podem ser adicionados', () =>{
    // Arrange
    render(<Formulario/>)
    
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