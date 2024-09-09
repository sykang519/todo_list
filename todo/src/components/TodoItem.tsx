import React from 'react';
import logo from './logo.svg';
import styles from './TodoItem.module.css'
import { FiTrash2 } from 'react-icons/fi';
import { GoPencil } from "react-icons/go";

interface Todo{
  id: number;
  text: string;
  checked: boolean;
}

interface TodoItemProps{
  todo: Todo;
}


function TodoItem({todo} : TodoItemProps) {
  return (
    <div className={styles.container}>
        <input className={styles.checkbox} type="checkbox" />
        <div className={styles.todo}> {todo.text} </div>
        <div className={styles.buttonContainer}>
            <button className={styles.buttons}><GoPencil className={styles.icon}/></button>
            <button className={styles.buttons}><FiTrash2 className={styles.icon}/></button>
        </div>
    </div>
  );
}

export default TodoItem;
