import Add from '../button/Add'
import Table from '../Table'
import styles from '../../styles/Cage.module.css'
import CageForm from '../form/CageForm'
import { useState } from 'react'

function Cage(){

    const header = [
        {key: 'codigo', head: 'Coluna'},
        {key: 'descricao', head: 'Descrição'}
    ]

    const data = [
        {codigo: 'kndeondon', descricao: 'marcaAA'},
        {codigo: 'cçccc', descricao: 'marcaBB'},
        {codigo: 'cm3opcm', descricao: 'marcaCC'},
        {codigo: '519815161', descricao: 'marcaDD'}
    ]

    const [adicionarNovo, setAdicionarNovo] = useState(false)
    
    return (
        <div className={styles.cage}>
            <h2 className={styles.titulo}>Cadastro de Cages</h2>
            {adicionarNovo && <CageForm close={setAdicionarNovo}/>}
            <Add onClick={setAdicionarNovo} text='Novo cage'/>
            <Table head={header} data={data} />
        </div>
    )
}

export default Cage;