import { CreateTodo } from '../createTodo/CreateTodo'
import { Tarefa } from '../tarefa/Tarefa'
import styles from './TodoList.module.css'

const toDo = [
    {
        id: 0,
        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    },
    {
        id: 1,
        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    },
    {
        id: 2,
        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    },
    {
        id: 3,
        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    },
    {
        id: 4,
        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    },
    {
        id: 5,
        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    },
]
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
                {toDo.map(toDos => {
                    return (
                        <Tarefa
                            id={toDos.id}
                            tarefa={toDos.tarefa}
                        />
                    )
                })}
            </div>
        </div>
    )
}
