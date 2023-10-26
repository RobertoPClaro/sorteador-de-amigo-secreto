import realizarSorteio from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteio o próorio novom', () => {
        const participantes = [
            'Ana', 'Catarina', 'Roberto', 'Rose', 'Icaro', 'Ricardo', 'Arlete'
        ]

        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})