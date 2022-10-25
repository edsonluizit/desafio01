import styles from './Tarefa.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function Tarefa() {
    return (
        <div className={styles.tarefa}>

            <button className={styles.iconCheck} title="select">
                <Circle />
            </button>

            <div className={styles.tarefaContent}>
                <p> Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>
            <button className={styles.iconTrash}>
                <Trash />
            </button>
        </div>
    )
}
