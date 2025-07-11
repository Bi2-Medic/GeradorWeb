import styles from '../styles/Table.module.css'
import Edit from './Edit'
import Delete from './Delete'

function Table({head, data}){

    return(
        <table className={styles.table}>
            <thead>
                {head.map((h, idx) => {
                    return <th key={idx}>{h}</th>
                })}
            </thead>
            <tbody>
                {
                    data.map((obj, idx) => {
                        return <tr key={idx}>
                            <td>{obj.codigo}</td>
                            <td>{obj.descricao}</td>
                            <td>{obj.marca}</td>
                            <td>{obj.anvisa}</td>
                            <td>{obj.quantidade}</td>
                            <div className={styles.acoes}>
                                <Edit obj={obj}/>
                                <Delete obj={obj}/>
                            </div>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;