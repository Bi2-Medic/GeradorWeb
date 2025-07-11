import styles from '../styles/Produto.module.css'
import Table from '../components/Table'
import Add from '../components/Add'

function Produto(){

    const headers = ['Código', 'Descrição', 'Marca', 'Anvisa', 'Qnt. padrão']

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


    return (
        <div className={styles.produto}>
            <h2 className={styles.titulo}>Cadastro de produtos</h2>
            <Add />
            <Table head={headers} data={data}/>
        </div>
    )
}

export default Produto;
