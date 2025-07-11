import styles from '../styles/Add.module.css'

function Add(){

    function adicionar(){
        alert('adicionado')
    }

    return(
        <button className={styles.add} onClick={() => adicionar()}>Novo</button>
    )
}

export default Add