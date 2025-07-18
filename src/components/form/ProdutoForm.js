import { useState } from 'react';
import styles from '../../styles/Modal.module.css'
import style from '../../styles/Cancel.module.css'

function ProdutoForm({close}){

    function save() {
        alert('salvo');
        close(false)
    }

    const [descricao, setDescricao] = useState()
    const [marca, setMarca] = useState()
    const [fabricante, setFabricante] = useState()

    return (
        <form className={styles.form} onSubmit={(e) => save()}>
            <div className={style.div}>
                <button className={style.cancel} onClick={(e) => close(false)}>X</button>
            </div>
            <h3>Adicionar produto</h3>
            <input 
                type='text' 
                placeholder='Descrição do produto' 
                key='produtoDescricao'
                required
                onChange={(e) => setDescricao(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Marca do produto' 
                key='produtoMarca' 
                required
                onChange={(e) => setMarca(e.target.textContent)}/>
            <input 
                type='text' 
                placeholder='Fabricante do produto' 
                key='produtoFabricante'
                required 
                onChange={(e) => setFabricante(e.target.textContent)}/>
            <button type='submit'>Salvar</button>
        </form>
    )
}

export default ProdutoForm