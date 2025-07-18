import { useState } from 'react'
import styles from '../../styles/Tuss.module.css'
import Table from '../Table'
import Add from '../button/Add'
import TussForm from '../form/TussForm'

function Tuss(){

    const [adicionarNovo, setAdicionarNovo] = useState(false)

    const header = [
        {key: 'codigo', head: 'Código'},
        {key: 'descricao', head: 'Descrição'},
        {key: 'quantidade', head: 'Quantidade'},
    ]
    
    const data = [
        { codigo: 'aaa', descricao: 'Canulassssssssssssssssssssssssss', quantidade: '1' },
        { codigo: 'bbb', descricao: 'Canula', quantidade: '1' },
        { codigo: 'ccc', descricao: 'Canula', quantidade: '1' },
        { codigo: 'ddd', descricao: 'Canula', quantidade: '1' },
        { codigo: 'aaa', descricao: 'Canula', quantidade: '1' },
        { codigo: 'bbb', descricao: 'Canula', quantidade: '1' },
        { codigo: 'ccc', descricao: 'Canula', quantidade: '1' },
        { codigo: 'ddd', descricao: 'Canula', quantidade: '1' },
        { codigo: 'aaa', descricao: 'Canula', quantidade: '1' },
        { codigo: 'bbb', descricao: 'Canula', quantidade: '1' },
        { codigo: 'ccc', descricao: 'Canula', quantidade: '1' },
        { codigo: 'ddd', descricao: 'Canula', quantidade: '1' },
        { codigo: 'aaa', descricao: 'Canula', quantidade: '1' }
    ]

    return (
        <div className={styles.tuss}>
            <h2 className={styles.titulo}>Cadastro de Tuss</h2>
            {adicionarNovo && <TussForm close={setAdicionarNovo}/>}
            <Add onClick={setAdicionarNovo} text='Novo tuss'/>
            <Table head={header} data={data}/>
        </div>
    )
}

export default Tuss;