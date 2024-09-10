import styles from './TodoList.module.css'
import TodoItem from './TodoItem'


interface Todo {
    id: number;
    text: string;
    checked: boolean;
  }

interface TodoListProps{
    todos: Todo[];
    handleUpdate: (id:number, text:string)=>void;
    handleCheck: (id:number)=>void;
    handleRemove: (id:number)=>void;
}

function TodoList({todos, handleUpdate, handleCheck, handleRemove}:TodoListProps){
    
  return (
    <div className={styles.container}>
        {todos.map((todo)=>(
            <TodoItem todo={todo} key={todo.id} handleUpdate={handleUpdate} handleCheck={handleCheck} handleRemove={handleRemove}/>
        ))}
    </div>
  );
}

export default TodoList;