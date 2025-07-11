import styles from '../styles/Tuss.module.css'
import Table from '../components/Table'
import Add from '../components/Add'

function Tuss(){

    const headers = ['Código', 'Descrição', 'Qnt. padrão']

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
            <Add />
            <Table head={headers} data={data}/>
        </div>
    )
}

export default Tuss;