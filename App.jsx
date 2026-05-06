import { useEffect, useState } from 'react'

function App() {
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState('')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
        if (!res.ok) {
          throw new Error('Fetch failed')
        }
        return res.json()
      })
      .then((data)=>{
        setUsers(data)
        setLoading(false)
      })
      .catch(()=>{
        setError('Cannot load users')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
    <div>Loading</div>
  )}

  if (error) {
    return (
    <div>{error}</div>
  )}

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
