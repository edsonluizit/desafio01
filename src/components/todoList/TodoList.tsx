

import styles from './TodoList.module.css'
import { Tarefa } from '../tarefa/Tarefa'
import iconPlus from '../../assets/iconPlus.svg'
import { useState } from 'react'

interface toDosInterface {
    id: number;
    tarefa: string;
}[]

//const toDos = [
//    {
//        id: 0,
//        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
//    },
//    {
//        id: 1,
//        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
//    },
//    {
//        id: 2,
//        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
//    },
//    {
//        id: 3,
//        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
//    },
//    {
//        id: 4,
//        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
//    },
//    {
//        id: 5,
//        tarefa: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
//    },
//]
export function TodoList() {
    const [toDos, setToDos2] = useState([{ id: 0, tarefa: '' }])



    function handleCreateNewTodo() {
        event?.preventDefault()
        //const newToDos = event.target.

        setToDos2([...toDos, { id: toDos.length + 1, tarefa: event?.target.inputCreateTodo.value }])
        //console.log(toDos);

    }

    return (
        <div className={styles.todoList}>
            <form onSubmit={handleCreateNewTodo} action="" id="formCreateTodo" className={styles.createTodo}>
                <input type="text" placeholder="Adicione uma nova tarefa" name="inputCreateTodo" />

                <button type="submit" form="formCreateTodo" value="Submit">
                    <p>Criar</p> <img src={iconPlus} alt="" />
                </button>
            </form>




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
                {toDos.map(todo => {
                    return (
                        <Tarefa
                            id={todo.id}
                            tarefa={todo.tarefa}
                        />
                    )
                })}
            </div>
        </div>

    )
}
