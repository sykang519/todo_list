import { useState } from 'react';
import logo from './logo.svg';
import styles from './TodoItem.module.css'
import { FiTrash2 } from 'react-icons/fi';
import { GoPencil } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { GrCheckbox } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Modal from './ItemModal'

interface Todo{
  id: number;
  text: string;
  content: string;
  checked: boolean;
}

interface TodoItemProps{
  todo: Todo;
  handleUpdate: (id:number, text:string)=>void;
  handleUpdateContent: (id:number, content:string)=>void;
  handleCheck : (id:number)=>void;
  handleRemove: (id:number)=>void;
}


function TodoItem({todo, handleUpdate, handleUpdateContent, handleCheck, handleRemove} : TodoItemProps) {
  
  // 수정 상태 관리
  const [modifying, setModifying] = useState(false);
  const Modifying = () => {
    setModifying(!modifying);
  }
  
  // 수정 텍스트
  const [text, setText] = useState(todo.text)

  // 모달창 관리
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleTextChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  // 수정 완료 버튼 클릭 시 호출
  const handleSubmit = (id:number, newtext:string) => {
    handleUpdate(id, newtext);
    Modifying()

  }

  var modifycontent = 
  <form className={styles.container}>
    <input className={styles.inputBox} defaultValue={todo.text} onChange={handleTextChanged} autoFocus/>
    <div className={styles.buttons} onClick={Modifying}> 
      <IconButton><MdOutlineCancel className={styles.icon}/></IconButton>
    </div>
    <div className={styles.buttons} onClick={() => handleSubmit(todo.id, text)}>
      <IconButton><MdDoneOutline className={styles.icon}/></IconButton>
    </div>
  </form>



  var unmodifycontent 
  = <div className={styles.container}>
      {todo.checked ? 
        <>
          <div className={styles.checkbox} onClick={() => handleCheck(todo.id)}>
            <IconButton><GrCheckboxSelected className={styles.icon}/></IconButton>
          </div>
          <div className={styles.todo_fin} onClick={handleOpen}>{todo.text}</div>

          {open &&
            <Modal todo={todo} open={open} handleClose={handleClose} updateText={handleUpdate} updateContent={handleUpdateContent}/>
          }
        </> :

        <>
          <div className={styles.checkbox} onClick={() => handleCheck(todo.id)}>
            <IconButton><GrCheckbox className={styles.icon}/></IconButton>
          </div>
          <div className={styles.todo} onClick={handleOpen}>{todo.text}</div>
        </>
      }
        <div className={styles.buttons} onClick={Modifying}>
          <IconButton><GoPencil className={styles.icon}/></IconButton>
        </div>
        <div className={styles.buttons} onClick={() => handleRemove(todo.id)}>
          <IconButton><FiTrash2 className={styles.icon}/></IconButton>
        </div>
        {open &&
            <Modal todo={todo} open={open} handleClose={handleClose} updateText={handleUpdate} updateContent={handleUpdateContent}/>
          }
    </div>

  return (
    <>
    {/* 투두리스트 수정 중일 때 */}
    {modifying && 
      modifycontent
    }

    {/* 투두리스트 수정 안 할 때 */}
    {!modifying && 
      unmodifycontent
    }
    </>
  );
}

export default TodoItem;
