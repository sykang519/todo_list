import React, { useState } from 'react';
import styles from './AddTodo.module.css';
import { GoPlusCircle } from "react-icons/go";
import IconButton from '@mui/material/IconButton';

interface Todo{
  id: number;
  text: string;
  content: string;
  checked: boolean;
}

interface AddTodoProps {
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}


function AddTodo({setTodo} : AddTodoProps) {
  // 사용자의 입력값 저장하는 state
  const [text, setText] = useState('');

  // 사용자가 input 창에 값을 작성할 경우 text state를 변경
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // create
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    setTodo(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1,
        text: text,
        content: "",
        checked: false,
      },
    ]);

    // 입력 필드 초기화
    setText(''); 
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.inputBox} type="text" value={text} onChange={handleInputChange} placeholder="할 일을 입력하세요" required />
      <button className={styles.buttons} type="submit"><IconButton><GoPlusCircle className={styles.icon}/></IconButton></button>

    </form>
  );
}

export default AddTodo;
