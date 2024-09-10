# React, typescript로 간단한 투두 리스트 만들기

## 1. 시연 영상
![투두리스트](https://github.com/user-attachments/assets/074ccd4c-37a6-48e6-80c4-adbbdb0034d7)

## 2. 기능 소개
- 할 일 추가
- 할 일 수정
- 할 일 삭제
- 완료 표시

## 3. 컴포넌트 구조
<img width="966" alt="스크린샷 2024-09-10 오후 2 38 40" src="https://github.com/user-attachments/assets/05fed38f-c01d-4bd5-83f5-330e47898839">
               

## 4. 핵심 코드 설명
### App.tsx

```tsx
interface Todo{
    id: number;
    text: string;
    checked: boolean
  }
  const [todos, setTodos] = useState<Todo[]>([]);
```

interface로 투두 요소의 틀을 만든다.  useState로 투두 리스트 상태를 관리한다.

```tsx
//update
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
```

투두 정보를 수정, 삭제하는 함수들이다.

세 함수 모두 App.tsx → TodoList.tsx → TodoItem.tsx 를 거쳐 props로 전달된다.



### AddTodo.tsx

```tsx
interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface AddTodoProps {
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function AddTodo({setTodo} : AddTodoProps){
 // ...
}
```

상위컴포넌트인 App.tsx 로부터 setTodos 함수를 props로 받는다.

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    setTodo(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1,
        text: text,
        checked: false,
      },
    ]);

    // 입력 필드 초기화
    setText(''); 
  };
```

 투두 등록 버튼을 눌렀을 때 호출되는 함수다. setTodos 함수를 통해서 todos 에 새로운 투두를 추가한다.

 

### TodoList.tsx

```tsx
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
	// ... 
}
```

상위 컴포넌트인 App.tsx 로부터 update, remove, 완료관리 기능을 하는 함수를 props로 받는다.



### TodoItem.tsx

```tsx
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
 // ... 
}
```

상위 컴포넌트인 App.tsx 로부터 update, remove, 완료관리 기능을 하는 함수를 props로 받는다.

```tsx
const handleSubmit = (id:number, newtext:string) => {
    handleUpdate(id, newtext);
    Modifying()
 }
```

수정 완료 버튼을 눌렀을 때 호출되는 함수다. 상위 컴포넌트에서 전달받은 handleUpdate 함수를 통해서 투두의 내용을 수정한다. 

```jsx
const [modifying, setModifying] = useState(false);

const Modifying = () => {
    setModifying(!modifying);
  }
```

useState로 수정상태 여부를 관리한다. 수정버튼, 수정 완료 버튼, 수정 취소 버튼을 누를 때마다 modifying의 값이 반전된다.

수정 상태가 true일 경우에는 수정 전용 input 컴포넌트를 보여주고, false인 경우에는 투두 내용을 보여준다.
