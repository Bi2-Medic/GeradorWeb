import { useState } from 'react';
import Table from '../components/Table'
import styles from '../styles/Pedido.module.css'

function Pedido(){

    const [dtI, setDtInicial] = useState(null)
    const [dtF, setDtFinal] = useState(null)

    return (
        <div className={styles.pedido}>
            <h2>Pedidos Gerados</h2>
            <div>
                <h3>Filtro</h3>
                <label>Data inicial:</label>
                <input type='date' onChange={(e) => setDtInicial(new Date(e.target.value))}></input>
                <label>Data final:</label>
                <input type='date' onChange={(e) => setDtFinal(new Date(e.target.value))}></input>
                <p>{dtI && dtI.toLocaleDateString()}</p>
                <p>{dtF && dtF.toLocaleDateString()}</p>
            </div>
            <Table head={['Data', 'CPF', 'Funcionaria']} data={[['01/01/2025', '44960880880', 'bi6@medic.com.br']]} dtI={dtI} dtF={dtF}/>
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