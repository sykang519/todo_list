import React from 'react';
import styles from './AddTodo.module.css';
import { GoPlusCircle } from "react-icons/go";

function AddTodo() {
  return (
    <div className={styles.container}>
      <input className={styles.inputBox} type="text" placeholder="할 일을 입력하세요" />
      <button className={styles.buttons}><GoPlusCircle className={styles.icon}/></button>

    </div>
  );
}

export default AddTodo;
