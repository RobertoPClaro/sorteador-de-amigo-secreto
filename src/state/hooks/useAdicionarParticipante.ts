import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    const lista = useRecoilValue(listaParticipantesState)
    const setErro = useSetRecoilState(erroState)

    return (nomeDoPaticipante: string) => {
        if (lista.includes(nomeDoPaticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("")
            },5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoPaticipante])
    }
}