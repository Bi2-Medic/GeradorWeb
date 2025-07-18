import styles from '../../styles/Produto.module.css'
import Table from '../Table'
import Add from '../button/Add'
import ProdutoForm from '../form/ProdutoForm'
import { useState } from 'react'

function Produto(){

    const header = [
        {key: 'codigo', head: 'Código'},
        {key: 'descricao', head: 'Descrição'},
        {key: 'marca', head: 'Marca'},
        {key: 'anvisa', head: 'Anvisa'},
        {key: 'quantidade', head: 'Quantidade'},
    ]

    const data = [
        { codigo: 'aaa', descricao: 'Canulassssssssssssssssssssssssss', marca: 'Renova', anvisa: '84848484', quantidade: '1' },
        { codigo: 'bbb', descricao: 'Canula', marca: 'Medfactor', anvisa: '9846161', quantidade: '1' },
        { codigo: 'ccc', descricao: 'Canula', marca: 'Stratus', anvisa: '54981231', quantidade: '1' },
        { codigo: 'ddd', descricao: 'Canula', marca: 'DMF', anvisa: '4891218', quantidade: '1' },
        { codigo: 'aaa', descricao: 'Canula', marca: 'Renova', anvisa: '84848484', quantidade: '1' },
        { codigo: 'bbb', descricao: 'Canula', marca: 'Medfactor', anvisa: '9846161', quantidade: '1' },
        { codigo: 'ccc', descricao: 'Canula', marca: 'Stratus', anvisa: '54981231', quantidade: '1' },
        { codigo: 'ddd', descricao: 'Canula', marca: 'DMF', anvisa: '4891218', quantidade: '1' },
        { codigo: 'aaa', descricao: 'Canula', marca: 'Renova', anvisa: '848484zzzzzzzzzzzzzzzzzzzzzzzz84', quantidade: '1' },
        { codigo: 'bbb', descricao: 'Canula', marca: 'Medfactor', anvisa: '9846161', quantidade: '1' },
        { codigo: 'ccc', descricao: 'Canula', marca: 'Stratus', anvisa: '54981231', quantidade: '1' },
        { codigo: 'ddd', descricao: 'Canula', marca: 'DMF', anvisa: '4891218', quantidade: '1' },
        { codigo: 'aaa', descricao: 'Canula', marca: 'Renova', anvisa: '84848484', quantidade: '1' }
    ]

    const [adicionarNovo, setAdicionarNovo] = useState(false)

    return (
        <div className={styles.produto}>
            <h2 className={styles.titulo}>Cadastro de produtos</h2>
            {adicionarNovo && <ProdutoForm close={setAdicionarNovo}/>}
            <Add onClick={setAdicionarNovo} text='Novo produto'/>
            <Table head={header} data={data}/>
        </div>
    )
}

export default Produto;
