import React from 'react'
import Button from '../../UI/Button/Button'
import s from './ServiceBlock.module.sass'

export default function ServiceBlock({serviceObject}) {
  return (
    <div className={s.serviceblock} style={{backgroundColor: serviceObject.bgcolor}}>
          <div>{serviceObject.title}</div>
          <Button>Подробнее</Button>
    </div>      
  )  
}