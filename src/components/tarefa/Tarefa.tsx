import styles from './Tarefa.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function Tarefa() {
    return (
        <div className={styles.tarefa}>

            <input
                title='checkbox'
                type="checkbox"
            />

            <div className={styles.tarefaContent}>
                <p> Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>
            <button
                type='button'
                title='delete'>
                <Trash />
            </button>
        </div>
    )
}
