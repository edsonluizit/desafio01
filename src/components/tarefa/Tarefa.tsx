import styles from './Tarefa.module.css'
import Check from '../../assets/check.svg'
import Trash from '../../assets/trash.svg'

export function Tarefa() {
    return (
        <div className={styles.tarefa}>
            <div className={styles.iconCheck}>
                <img src={Check} alt="" />
            </div>
            <div className={styles.tarefaContent}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </div>
            <div className={styles.trash}>
                <img src={Trash} alt="" />
            </div>
        </div>
    )
}
