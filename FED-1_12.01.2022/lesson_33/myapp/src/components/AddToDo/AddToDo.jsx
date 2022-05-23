import React from 'react'
import Button from '../UI/Button';
import Input from '../UI/Input';
import s from './AddToDo.module.sass'

export default function AddToDo({addToDo}) {

  const submit = e => {
      e.preventDefault();
      const {title,description} = e.target;
      addToDo(Date.now(), title.value, description.value);
      title.value = '';
      description.value ='';
  }
  return (
    <form className={s.form} onSubmit={submit}>
      <label className={s.field}>
        {/* <p>Название</p> */}
        <Input>Название</Input>
      </label>
      <label className={s.field}>
        <p>Описание</p>
        <textarea name ='description' type="text"></textarea>
      </label>
      {/* <button className={s.btn}>Добавить</button> */}
      <Button></Button>
    </form>
  )
}
