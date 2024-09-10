import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import styles from './App.module.css';
import {useState} from 'react'

function App() {

  interface Todo{
    id: number;
    text: string;
    checked: boolean
  }
  const [todos, setTodos] = useState<Todo[]>([]);

  // update
  const handleUpdate = (id : number, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText} : todo
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
      <h1>💝 Todo list 💝</h1>
      <AddTodo setTodo={setTodos}/>
      <TodoList todos={todos} handleUpdate={handleUpdate} handleCheck={handleCheck} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
