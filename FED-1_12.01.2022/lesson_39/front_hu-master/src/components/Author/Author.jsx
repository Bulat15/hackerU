import React from 'react'
import { deleteAuthor } from '../../requests'
import s from './Author.module.sass'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { fetchDeleteAuthor } from '../../assynncActions/autors'

export default function Author({ id, name, lastname }) {

  const dispatch = useDispatch();

  const deleteAutor = ()=>dispatch(fetchDeleteAuthor(id));

  return (
    <div className={s.card}>
      <p>{name}</p>
      <p>{lastname}</p>
      <Button label={'Удалить!'} onClick={deleteAutor} />
    </div>
  )
}
