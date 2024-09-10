import React, { useState } from 'react';
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
  handleCheck : (id:number)=>void;
  handleRemove: (id:number)=>void;
}


function TodoItem({todo, handleCheck, handleRemove} : TodoItemProps) {
  return (
    <div className={styles.container}>
        <input className={styles.checkbox} type="checkbox" onChange={() => handleCheck(todo.id)}/>
          {todo.checked ? <div className={styles.todo_fin}>{todo.text}</div> : <div className={styles.todo}>{todo.text}</div>}
        <div className={styles.buttonContainer}>
            <button className={styles.buttons}><GoPencil className={styles.icon}/></button>
            <button className={styles.buttons} onClick={() => handleRemove(todo.id)}><FiTrash2 className={styles.icon}/></button>
        </div>
    </div>
  );
}

export default TodoItem;
