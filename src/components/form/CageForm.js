import { useState } from 'react'
import styles from '../../styles/Modal.module.css'
import style from '../../styles/Cancel.module.css'

function CageForm({close}) {

    function save(){
        alert('salvo')
        close(false)
    }

    const [coluna, setColuna] = useState()
    const [produto, setProduto] = useState()

    return (
        <form className={styles.form} onSubmit={(e) => save()}>
            <div className={style.div}>
                <button className={style.cancel} onClick={(e) => close(false)}>X</button>
            </div>
            <h3>Adicionar Cage</h3>
            <input 
                type='text' 
                placeholder='Coluna do Cage' 
                key='CageColuna'
                required
                onChange={(e) => setColuna(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Produto do Cage' 
                key='CageProduto' 
                required
                onChange={(e) => setProduto(e.target.textContent)}/>
            <button type='submit'>Salvar</button>
        </form>
    )
}

export default CageForm