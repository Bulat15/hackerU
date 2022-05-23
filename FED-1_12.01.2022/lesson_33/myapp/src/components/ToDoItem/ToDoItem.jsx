import React from 'react'
import Button from '../UI/Button'
import s from './ToDoItem.module.sass'

export default function ToDoItem({ id, title, description, deleteFuction }) {
  return (
    <div className={s.item}>
      <p>
        Номер: {id}
      </p>
      <p>
        Наименование: {title}
      </p>
      <p>
        Описание: {description}
      </p>
      <Button
        onClick={() => deleteFuction(id)}
        style={{ width: "20px", height: "20px" }}>
          x
      </Button>
    </div>
  )
}
