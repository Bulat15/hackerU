import React from 'react'
import { useSelector } from 'react-redux'
import Author from '../Author'
import s from './AuthorsContainer.module.sass'

export default function AuthorsContainer() {
  const authors = useSelector(state => state);
  return (
    <div className={s.container}>
        {authors.map(author => <Author key={author.id} {...author}/>)}
    </div>
  )
}
