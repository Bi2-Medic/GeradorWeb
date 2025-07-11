import styles from '../styles/Edit.module.css'
import editIcon from '../assets/edit.svg'

function Edit({obj}){

    function edit(){
        alert(obj.codigo + "\n" + obj.descricao)
    }

    return <button className={styles.button} onClick={() => edit()}>
        <img src={editIcon} alt='Editar' width={20} height={20}/>
    </button>
}

export default Edit