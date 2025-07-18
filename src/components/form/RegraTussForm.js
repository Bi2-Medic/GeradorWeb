import { useState } from 'react'
import styles from '../../styles/Modal.module.css'
import style from '../../styles/Cancel.module.css'

function RegraTussForm({close}) {

    function save(){
        alert('salvo')
        close(false)
    }

    const [procedimento, setProcedimento] = useState()
    const [local, setLocal] = useState()
    const [tuss, setTuss] = useState()

    return (
        <form className={styles.form} onSubmit={(e) => save()}>
            <div className={style.div}>
                <button className={style.cancel} onClick={(e) => close(false)}>X</button>
            </div>
            <h3>Adicionar Regra de Tuss</h3>
            <input 
                type='text' 
                placeholder='Procedimento da Regra' 
                key='RegraProcedimento'
                required
                onChange={(e) => setProcedimento(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Local da Regra' 
                key='RegraLocal' 
                required
                onChange={(e) => setLocal(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Tuss da Regra' 
                key='RegraTuss'
                required 
                onChange={(e) => setTuss(e.target.textContent)}/>
            <button type='submit'>Salvar</button>
        </form>
    )
}

export default RegraTussForm