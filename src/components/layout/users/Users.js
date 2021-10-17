import React from 'react'
import UserItem from './UserItem';

export const Users = (props) => {
  return (
      <div className="container" >
        <div className="row">
           {props.users.map(user => (
            <UserItem key={user.id} user={user}/>
            )
          )}
        </div>
      </div>

  )
}


export default Users;