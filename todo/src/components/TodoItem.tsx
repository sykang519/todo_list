import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './TodoItem.module.css'
import { FiTrash2 } from 'react-icons/fi';
import { GoPencil } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { GrCheckbox } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";

interface Todo{
  id: number;
  text: string;
  checked: boolean;
}

interface TodoItemProps{
  todo: Todo;
  handleUpdate: (id:number, text:string)=>void;
  handleCheck : (id:number)=>void;
  handleRemove: (id:number)=>void;
}


function TodoItem({todo, handleUpdate, handleCheck, handleRemove} : TodoItemProps) {

  const [modifying, setModifying] = useState(false);

  const [text, setText] = useState("")

  const Modifying = () => {
    setModifying(!modifying);
  }

  const handleTextChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (id:number, newtext:string) => {
    handleUpdate(id, newtext);
    Modifying()

  }

  return (
    <>
    {/* 투두리스트 수정 중일 때 */}
    {modifying && 
      <form className={styles.container}>
        <input className={styles.inputBox} defaultValue={todo.text} onChange={handleTextChanged} required/>
        <div className={styles.buttons} onClick={Modifying}> <MdOutlineCancel className={styles.icon}/></div>
        <div className={styles.buttons} onClick={() => handleSubmit(todo.id, text)}> <MdDoneOutline className={styles.icon}/></div>
      </form>
    }

    {/* 투두리스트 수정 안 할 때 */}
    {!modifying && 
      <div className={styles.container}>

        {todo.checked ? 
          <>
            <div className={styles.checkbox} onClick={() => handleCheck(todo.id)}><GrCheckboxSelected className={styles.icon}/></div>
            <div className={styles.todo_fin}>{todo.text}</div>
          </> :

          <>
            <div className={styles.checkbox} onClick={() => handleCheck(todo.id)}><GrCheckbox className={styles.icon}/></div>
            <div className={styles.todo}>{todo.text}</div>
          </>
        }
          <div className={styles.buttons} onClick={Modifying}><GoPencil className={styles.icon}/></div>
          <div className={styles.buttons} onClick={() => handleRemove(todo.id)}><FiTrash2 className={styles.icon}/></div>
      </div>
    }
    </>
  );
}

export default TodoItem;
