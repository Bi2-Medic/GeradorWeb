import Add from '../button/Add'
import Table from '../Table'
import styles from '../../styles/Regra.module.css'
import style from '../../styles/Adicionar.module.css'
import RegraProdutoForm from '../form/RegraProdutoForm'
import RegraTussForm from '../form/RegraTussForm'
import { useState } from 'react'

function Regra(){

    const header = [
        {key: 'procedimento', head: 'Procedimento'},
        {key: 'local', head: 'Membro'}
    ]

    const data = [
        {procedimento: 'bloqueio', local: 'coluna AAA'},
        {procedimento: 'discectomia', local: 'coluna AAA'},
        {procedimento: 'artroscopia', local: 'coluna AAA'},
        {procedimento: 'artrodese', local: 'coluna AAA'}
    ]

    const [adicionarNovoProduto, setAdicionarNovoProduto] = useState(false)
    const [adicionarNovoTuss, setAdicionarNovoTuss] = useState(false)

    return (
        <div className={styles.regra}>
            <h2 className={styles.titulo}>Cadastro de Regras</h2>
            {adicionarNovoProduto && <RegraProdutoForm close={setAdicionarNovoProduto}/>}
            {adicionarNovoTuss && <RegraTussForm close={setAdicionarNovoTuss}/>}
            <div className={style.divBotoes}>
                <Add onClick={setAdicionarNovoProduto} text='Nova regra de produto'/>
                <Add onClick={setAdicionarNovoTuss} text='Nova regra  de tuss'/>
            </div>
            <Table head={header} data={data} />
        </div>
    )
}

export default Regra;