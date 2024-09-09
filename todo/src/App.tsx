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
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      checked: false,
    },
  ]);

  const handleRemove = (id:number) => {    
    // todos.id와 id가 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // todos.id === id인 원소만 제거함. 즉, true인 원소들만 반환한다.    
    setTodos(todos.filter((todo) => todo.id !== id));  
  };



  return (
    <div className={styles.container}>
      <h1>Todo list</h1>
      <AddTodo setTodo={setTodos}/>
      <TodoList todos={todos} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
