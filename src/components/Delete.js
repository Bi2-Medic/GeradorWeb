import styles from '../styles/Delete.module.css'
import deleteIcon from '../assets/trash.svg'

function Delete({obj}){

    function deletar(){
        alert(obj.codigo + "\n" + obj.descricao)
    }

    return <button className={styles.button} onClick={() => deletar()}>
        <img src={deleteIcon} alt='Deletar' width={20} height={20}/>
    </button>
}

export default Delete