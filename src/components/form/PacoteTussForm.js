import { useState } from 'react'
import styles from '../../styles/Modal.module.css'
import style from '../../styles/Cancel.module.css'

function PacoteTussForm({close}) {

    function save(){
        alert('salvo')
        close(false)
    }

    const [convenio, setConvenio] = useState()
    const [hospital, setHospital] = useState()
    const [procedimento, setProcedimento] = useState()
    const [local, setLocal] = useState()
    const [tuss, setTuss] = useState()

    return (
        <form className={styles.form} onSubmit={(e) => save()}>
            <div className={style.div}>
                <button className={style.cancel} onClick={(e) => close(false)}>X</button>
            </div>
            <h3>Adicionar Pacote de Tuss</h3>
            <input 
                type='text' 
                placeholder='Descrição do Pacote' 
                key='PacoteConvenio'
                required
                onChange={(e) => setConvenio(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Hospital do Pacote' 
                key='PacoteHospital' 
                required
                onChange={(e) => setHospital(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Procedimento do Pacote' 
                key='PacoteProcedimento'
                required 
                onChange={(e) => setProcedimento(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Local do Pacote' 
                key='PacoteLocal'
                required 
                onChange={(e) => setLocal(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Tuss do Pacote' 
                key='PacoteTuss'
                required 
                onChange={(e) => setTuss(e.target.textContent)}/>
            <button type='submit'>Salvar</button>
        </form>
    )
}

export default PacoteTussForm