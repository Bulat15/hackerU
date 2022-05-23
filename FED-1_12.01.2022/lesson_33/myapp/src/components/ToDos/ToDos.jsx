import React,{useState} from 'react'
import ToDoList from '../ToDoList'
// import Counter from '../Counter'
import s from './ToDos.module.sass'
import AddToDo from '../AddToDo';

export default function ToDos() {
  
  const [todo,setTodo] = useState ([
    {
        id:1,
        title:'бsdеwwг',
        description:'Не очень люблю'
    },
    {
    id:2,
    title:'беwsdwг',
    description:'Не очень люблю'
    },
    {
    id:3,
    title:'беwsdsdwг',
    description:'Не очень люблю'
    }
]);

const addToDo = (id,title,description)=>{
  setTodo([...todo, {id,title,description}]);
};

const deleteTodo = id =>{
  setTodo(prev => prev.filter(t => t.id !== id));
}

  return (
    <div className={s.todos}>
        <h1>Дела на сегодня</h1>
        <p>Терпение и труд,все я устал</p>
        <AddToDo addToDo={addToDo} />
        <ToDoList todo={todo} deleteTodo={deleteTodo}/>
    </div>
  )
}
