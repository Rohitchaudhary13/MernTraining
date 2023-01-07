import { fetchUsers } from './userSlice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react'

const userView = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUsers());
    }, [])
    
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default userView