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



  return (
    <div className={styles.container}>
      <h1>Todo list</h1>
      <AddTodo setTodo={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
