import React from 'react'
import styles from './style.module.css'

export default function Formulario() {
  return (
    <form>
        <input className={styles.input} type='text' placeholder='Insira os nomes dos participantes'/>
        <button className={styles.button} disabled={true}>Adicionar</button>
    </form>
  )
}
