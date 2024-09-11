import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import styles from './App.module.css';
import {useState} from 'react'

function App() {

  interface Todo{
    id: number;
    text: string;
    content: string;
    checked: boolean;
  }
  const [todos, setTodos] = useState<Todo[]>([]);

  // update
  const handleUpdate = (id : number, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText} : todo
    ))
  }

  const handleUpdateContent = (id : number, newContent: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, content: newContent} : todo
    ))
  }

  // delete
  const handleRemove = (id:number) => {    
    setTodos(todos.filter((todo) => todo.id !== id));  
  };

  // 완료 표시
  const handleCheck = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  };


  return (
    <div className={styles.container}>
      <h1>🩵 할 일 목록 🩵</h1>
      <AddTodo setTodo={setTodos}/>
      <TodoList todos={todos} handleUpdate={handleUpdate} handleUpdateContent={handleUpdateContent} handleCheck={handleCheck} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
