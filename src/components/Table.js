import styles from '../styles/Table.module.css'
import Edit from './button/Edit'
import Delete from './button/Delete'

function Table({head, data}){

    return(
        <table className={styles.table}>
            <thead>
                {
                    head.map((h) => {
                        return <th key={h.key}>{h.head}</th>
                    })
                }
            </thead>
            <tbody>
                {
                    data.map((obj, idx) => {
                        return <tr key={idx}>
                            {
                                head.map((h) => {
                                    return <td>
                                        {obj[h.key]}
                                    </td>
                                })
                            }
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