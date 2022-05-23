import React from 'react'
import s from './Input.module.sass'


export default function Input({children}) {
  return (
      <div>
        <label>{children}
        <input className={s.Input} name ='title' type="text" />
        </label>
      </div>
  )
}
