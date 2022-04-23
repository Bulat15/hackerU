import React from 'react'

export default function AddToDo({addToDo}) {

  const submit = e => {
      e.preventDefault();
      const {title,description} = e.target;
      addToDo(Date.now(), title.value, description.value);
      title.value = '';
      description.value ='';
  }
  return (
    <form onSubmit={submit}>
      <label>
        <p>Название</p>
        <input name ='title' type="text" />
      </label>
      <label>
        <p>Описание</p>
        <textarea name ='description' type="text"></textarea>
      </label>
      <button>Добавить</button>
    </form>
  )
}
