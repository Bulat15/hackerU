import React from 'react'
import Button from '../UI/Button/Button'
import s from './UserTriggerContainer.module.sass'

export default function UserTriggerContainer({count, getPost}) {

    const triggers = [];

    for ( let i =0; i<count; i++){
        const index =i+1
        triggers.push(<Button onClick={()=>getPost(index)} key={i}>{index}</Button>)
    }

  return (
    <div className={s.container}>
        {triggers}
    </div>
  )
}
