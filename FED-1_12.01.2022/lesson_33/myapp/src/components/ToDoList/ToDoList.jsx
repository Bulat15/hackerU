import React ,{useState} from 'react'
import ToDoItem from '../ToDoItem'

export default function ToDoList({todo,deleteTodo}) {
  return (
    <div>
        {todo.map(t => <ToDoItem deleteFuction={deleteTodo} key={t.id} {...t}/>)}
    </div>
  )
}
