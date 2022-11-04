import styles from './Tarefa.module.css'
import { Trash } from 'phosphor-react'
import React, { useState } from 'react';


export function Tarefa(props: {
    id: number;
    tarefa: string
}) {

    function handleDeleteTarefa() {
        console.log(props.id)
        props.onDeleteTodo(props.id)

    }

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [changeIcon, setChangeIcon] = useState<string>("../src/assets/check.svg")
    const [classNameCheck, setClassNameCheck] = useState(styles.tarefa)

    function handleCheckBox(event: React.MouseEvent) {
        console.log(isChecked)
        if (isChecked) {
            setIsChecked(false)
            setChangeIcon("../src/assets/check.svg");
            setClassNameCheck(styles.tarefa)
        } else {
            setIsChecked(true)
            setChangeIcon("../src/assets/checked.svg")
            setClassNameCheck(styles.tarefaChecked)
        }
        console.log("viva");
        console.log(isChecked)
    }
    return (
        <div className={classNameCheck}>
            <div>
                <button type="button"
                    onClick={handleCheckBox}
                >
                    <img src={changeIcon} alt="" />
                </button>
            </div>

            <div className={styles.tarefaContent}>
                <p>{props.tarefa}</p>
            </div>
            <button
                type='button'
                title='delete'
                onClick={handleDeleteTarefa}>
                <Trash />
            </button>
        </div>
    )
}
