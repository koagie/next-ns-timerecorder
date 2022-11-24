import { useState, useEffect } from 'react'

export default function users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data.users)
    }
    fetchUsers()
  },[])

  return (
    <div>
      <ul>
        {users.map(user => (
          <li className='font-mono text-xl' key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}