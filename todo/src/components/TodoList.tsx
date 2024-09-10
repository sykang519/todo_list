import styles from './TodoList.module.css'
import TodoItem from './TodoItem'


interface Todo {
    id: number;
    text: string;
    checked: boolean;
  }

interface TodoListProps{
    todos: Todo[];
    handleCheck: (id:number)=>void;
    handleRemove: (id:number)=>void;
}

function TodoList({todos, handleCheck, handleRemove}:TodoListProps){
    
  return (
    <div className={styles.container}>
        {todos.map((todo)=>(
            <TodoItem todo={todo} key={todo.id} handleCheck={handleCheck} handleRemove={handleRemove}/>
        ))}
    </div>
  );
}

export default TodoList;