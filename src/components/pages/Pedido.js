import { useState } from 'react';
import Table from '../Table'
import styles from '../../styles/Pedido.module.css'

function Pedido(){

    const [dtI, setDtInicial] = useState(null)
    const [dtF, setDtFinal] = useState(null)

    const header = [
        {key: 'data', head: 'Data de criação'},
        {key: 'cpf', head: 'CPF'},
        {key: 'funcionario', head: 'Colaborador de criação'},
    ]

    const data = [
        {data: '01/01/2025', cpf: '123456789', funcionario: 'Fulano'},
        {data: '29/06/2025', cpf: '123456789', funcionario: 'Beltrano'},
        {data: '13/07/2025', cpf: '123456789', funcionario: 'Ciclano'},
    ]

    return (
        <div className={styles.pedido}>
            <h2 className={styles.titulo}>Pedidos Gerados</h2>
            <h3>Filtro</h3>
            <div className={styles.filtro}>
                <label>Data inicial:</label>
                <input type='date' onChange={(e) => setDtInicial(new Date(e.target.value))}></input>
                <label>Data final:</label>
                <input type='date' onChange={(e) => setDtFinal(new Date(e.target.value))}></input>
            </div>
            <Table head={header} data={data} dtI={dtI} dtF={dtF}/>
        </div>
    )
}

export default Pedido;

/*const [usuario, setUsuario] = useState()
const [dtInicial, setDtInicial] = useState()
const [dtFinal, setDtFinal] = useState()

const pedidos = [
    { id: 1, pedido: 'Fulano', link: 'http://www.google.com.br', usuario: 1, data: 0},
    { id: 2, pedido: 'Beltrano', link: 'http://www.google.com.br', usuario: 2, data: 1},
    { id: 3, pedido: 'Ciclano', link: 'http://www.google.com.br', usuario: 3, data: 2}
]

const sizePedidos = pedidos.length

const usuarios = [
    { id: 1, nome: 'Fulano'},
    { id: 2, nome: 'Beltrano'},
    { id: 3, nome: 'Ciclano'}
]

return (
    <div>
        <h1>Pedidos Gerados</h1>

        <h2>Filtro</h2>
        <select onClick={(e) => setUsuario(e.target.value)}>
            <option value="" disabled selected>Por criador</option>
            {usuarios.map(u => {
                return <option id={u.id}>{u.nome}</option>
            })}
        </select>
        <label>Data inicial</label>
        <input type='date' placeholder='DD/MM/AAAA'/>
        <label>Data final</label>
        <input type='date' placeholder='DD/MM/AAAA'/>
        <h3>Total de pedidos: {sizePedidos}</h3>
        <ul>
            {
                pedidos.filter(p => {
                    const user = !user ? true : p.usuario == user
                    const dti = !dti ? true : p.data >= dti
                    const dtf = !dtf ? true : p.data <= dtf
                
                    return user === dti === dtf
                })
            }
        </ul>
    </div>
)*/