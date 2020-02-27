import React, { useState } from 'react'

const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

const handleSubmit = e => {
  e.preventDefault()
  setUser({
    [e.target.name]: e.target.value
  })
  console.log(user)
}
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="username" />
        <input type="password" name="password" />

        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login
