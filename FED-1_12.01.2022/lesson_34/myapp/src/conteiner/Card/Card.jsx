import React, { useContext } from 'react'
import s from './Card.module.sass'
import {Context} from '../../context'
import CloseButtom from '../../UI/CloseButtom';

export default function Card({ id,ru, en, state}) {
    const {сhangeCardState} = useContext(Context);
    const {deleteCard} = useContext(Context);


    const style = {
        backgroundColor: (state === 'ru' ? '#9B59B6' : '#2ECC71') 
    } 
    return (
        <div 
        onClick={()=>сhangeCardState(id)}
        className={s.card} style = {style}>
            <CloseButtom handler={()=> deleteCard(id)}/>
            {state === 'ru' ? ru : en}
        </div>
    )
}
