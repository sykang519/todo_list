import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borderRadius, display, flexbox } from '@mui/system';
import {useState} from 'react';
import { GoPencil } from "react-icons/go";
import styles from './ItemModal.module.css'
import { MdDoneOutline } from "react-icons/md";


interface Todo{
    id: number;
    text: string;
    content: string;
    checked: boolean;
  }

interface ItemModalProps{
    todo: Todo;
    open: boolean;
    handleClose: (value: boolean) => void;
    updateText: (id:number, text:string)=>void;
    updateContent: (id:number, content:string)=>void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };

function ItemModal({todo, open, handleClose, updateText, updateContent} : ItemModalProps) {
    // 투두 제목 수정 관리
    const [modifying, setModifying] = useState(false);
    const Modifying = () => {setModifying(!modifying);}

    const handleTextChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
      // 수정 완료 버튼 클릭 시 호출
    const handleSubmit = (id:number, newtext:string) => {
        updateText(id, newtext);
        Modifying()
    }
    // 수정 텍스트
    const [text, setText] = useState(todo.text)

    
    // 투두 내용 수정 관리
    const [modifyingContent, setModifyingContent] = useState(false);
    const ModifyingContent = () => { setModifyingContent(!modifyingContent);}

    const handleContentChanged = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    const handleContentSubmit = (id:number, newContent:string) => {
        updateContent(id, newContent);
        ModifyingContent()
    }

    const [content, setContent] = useState(todo.content)

    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 400,
            },
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h3" fontSize="28px" display="flex" justifyContent="space-between">
                {modifying ? 
                    <>
                        <input className={styles.inputText} defaultValue={todo.text} autoFocus onChange={handleTextChanged}/>
                        <MdDoneOutline className={styles.icon} onClick={() => handleSubmit(todo.id, text)}/>
                    </> 
                    :
                    <>
                        <div>{todo.text} </div>
                        <GoPencil className={styles.icon} onClick={Modifying}/> 
                    </>
                }
                </Typography>
                <hr/>
                <Typography id="transition-modal-description" sx={{ mt: 2 }} height="80%" fontSize="20px" display="flex" justifyContent="space-between" margin="10px">
                    {modifyingContent ?
                        <>
                            <textarea className={styles.inputContent} defaultValue={todo.content} autoFocus onChange={handleContentChanged}/>
                            <MdDoneOutline className={styles.icon} onClick={() => handleContentSubmit(todo.id, content)}/>
                        </>
                        :
                        <>
                            <div>{todo.content}</div>
                            <GoPencil className={styles.icon} onClick={ModifyingContent}/> 
                        </>
                    }
                </Typography>
            </Box>
            </Fade>
        </Modal>

    );
}
export default ItemModal;