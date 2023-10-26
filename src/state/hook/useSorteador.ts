import { useSetRecoilState } from "recoil"
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import realizarSorteio from "../helpers/realizarSorteio"
import { resultadoDoAmigoSecreto } from "../atom"


export const useSorteador = () => {
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)
    return () => {
       const resultado = realizarSorteio(participantes)
        setResultado(resultado)       
    }
}