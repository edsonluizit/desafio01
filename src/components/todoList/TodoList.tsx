import { CreateTodo } from '../createTodo/CreateTodo'
import { Tarefa } from '../tarefa/Tarefa'
import styles from './TodoList.module.css'

export function TodoList() {
    return (
        <div className={styles.todoList}>

            <CreateTodo />
            <div className={styles.listContent}>
                <div className={styles.top}>
                    <div className={styles.leftTop}>
                        <p>Tarefas criadas</p>
                        <span>5</span>
                    </div>
                    <div className={styles.rightTop}>
                        <p>Concluidas</p>
                        <span>2 de 6</span>
                    </div>
                </div>
                <Tarefa />
                <Tarefa />
                <Tarefa />
                <Tarefa />
            </div>
        </div>
    )
}
