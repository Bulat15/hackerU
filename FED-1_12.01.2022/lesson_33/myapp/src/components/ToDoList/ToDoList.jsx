// import React ,{useState} from 'react'
import ToDoItem from '../ToDoItem'
import s from './ToDoList.module.sass'

export default function ToDoList({todo,deleteTodo}) {
  return (
    <div className={s.list}>
      {
        todo.length > 0 ?
        todo.map(t => <ToDoItem deleteFuction={deleteTodo} key={t.id} {...t}/>) :
        <p className={s.note}>У вас нет дел</p>
        
        
      }
    </div>
  )
}
