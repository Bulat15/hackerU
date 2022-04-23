import React from 'react'
import s from './ToDoItem.module.sass'

export default function ToDoItem({id,title,description,deleteFuction}) {
  return (
    <div className={s.item} onDoubleClick={() => deleteFuction(id)}>
        <p>
            Номер: {id}
        </p>
        <p>
            Наименование: {title}
        </p>
        <p>
            Описание: {description}
        </p>
    </div>
  )
}
