import Add from '../button/Add'
import Table from '../Table'
import styles from '../../styles/Pacote.module.css'
import style from '../../styles/Adicionar.module.css'
import PacoteProdutoForm from '../form/PacoteProdutoForm'
import PacoteTussForm from '../form/PacoteTussForm'
import { useState } from 'react'

function Pacote(){

    const header = [
        {key: 'convenio', head: 'Convênio'},
        {key: 'hospital', head: 'Hopistal'},
        {key: 'procedimento', head: 'Procedimento'},
        {key: 'local', head: 'Membro'}
    ]

    const data = [
        {convenio: 'Unimed', hospital: 'rede dor', procedimento: 'bloqueio', local: 'coluna AAA'},
        {convenio: 'HapVida', hospital: 'sdeddB', procedimento: 'discectomia', local: 'coluna AAA'},
        {convenio: 'Bradesco', hospital: 'aaaaaaa', procedimento: 'artroscopia', local: 'coluna AAA'},
        {convenio: 'SulAmérica', hospital: 'bbbbbb', procedimento: 'artrodese', local: 'coluna AAA'}
    ]

    const [adicionarNovoProduto, setAdicionarNovoProduto] = useState(false)
    const [adicionarNovoTuss, setAdicionarNovoTuss] = useState(false)

    return (
        <div className={styles.pacote}>
            <h2 className={styles.titulo}>Cadastro de Pacotes</h2>
            {adicionarNovoProduto && <PacoteProdutoForm close={setAdicionarNovoProduto}/>}
            {adicionarNovoTuss && <PacoteTussForm close={setAdicionarNovoTuss}/>}
            <div className={style.divBotoes}>
                <Add onClick={setAdicionarNovoProduto} text='Novo pacote de produto'/> 
                <Add onClick={setAdicionarNovoTuss} text='Novo pacote de tuss'/> 
            </div>
            <Table head={header} data={data} />
        </div>
    )
}

export default Pacote;