import React, { useState, useEffect } from 'react'
import User from '../User'
import s from './UserContainer.module.sass'
import UserTriggerContainer from '../UserTriggerContainer'

export default function UserContainer() {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState([]);



    const getPost = (id) => {
        fetch(`https://reqres.in/api/users?page=${id}`)
            .then(data => data.json())
            .then(data => {setUsers(data.data); setPages(data.total_pages)})
    };

    useEffect(getPost, []);



    return (
        <div className={s.count}>
            <div className={s.container}>
                {
                    (users.length === 0) ? <p className={s.load}>Данные грузяться....</p> :
                        users.map(user => <User key={user.id} {...user} />)
                }
            </div>
            <UserTriggerContainer getPost = {getPost} count ={pages} />
        </div>
    )
}
