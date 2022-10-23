import styles from './CreateTodo.module.css'
import iconPlus from '../../assets/iconPlus.svg'

export function CreateTodo() {
    return (
        <div className={styles.createTodo}>
            <form action="" id="formCreateTodo">
                <input type="text" placeholder="Adicione uma nova tarefa" id="inputCreateTodo" />
            </form>
            <button type="submit" form="formCreateTodo" value="Submit">
                <p>Criar</p> <img src={iconPlus} alt="" />
            </button>
        </div>
    )
}
