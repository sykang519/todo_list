import styles from './TodoList.module.css'
import TodoItem from './TodoItem'


interface Todo {
    id: number;
    text: string;
    checked: boolean;
  }

interface TodoListProps{
    todos: Todo[];
}

function TodoList({todos}:TodoListProps ){
    
  return (
    <div className={styles.container}>
        {todos.map((todo)=>(
            <TodoItem todo={todo} key={todo.id}/>
        ))}
    </div>
  );
}

export default TodoList;