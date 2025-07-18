import styles from '../../styles/Add.module.css'

function Add({onClick, text}){

    return(
        <button className={styles.add} onClick={() => onClick(true)}>{text}</button>
    )
}

export default Add