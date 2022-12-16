import React from 'react'
import UserItem from './UserItem'

function UserList({users, removeHandler}) {
  return (
    <div>
        {users.map((item) => {
            return(
            <UserItem remove={removeHandler} key={item.id} name={item.name} age={item.age} id={item.id}/>
            )
        })}
    </div>
  )
}

export default UserList