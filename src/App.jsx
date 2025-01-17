import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './users/Search'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const searchUsers = async (text) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(res.data.items);
    setLoading(false)
  }

  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Search searchUsers={searchUsers} />
        <Users users={users} loading={loading} />
      </div>
    </div>
  )
}

export default App
