import React, { useState } from 'react'
import styled from 'styled-components'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  margin: 80px auto 0;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
   
  input {
    padding: 5px;
    margin-bottom: 10px
  }

  button {
    width: 120px;
    padding: 5px;
    background: #ff3d4d;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline-color: orange;
  }
` 

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

const handleChange = e => {
  e.preventDefault()
  setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
  })
  console.log(credentials)
}

const handleSubmit = (e) => {
  e.preventDefault()

  axiosWithAuth()
  .post('/user/login', credentials)
  .then(res => {
    // not sure what the shape of the data is yet (res.data.token ?).
    localStorage.setItem('token', res.data.token)
    console.log('token: ', res.data.token)
    // props.history.push('./listings')
  })
  .catch(err => [
    console.log(err)
  ])

}
 
  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit} >
      <h2>Sign in</h2>
        <input 
        type="text" 
        name="name" 
        placeholder="username" 
        onChange={handleChange}
        required
        />
        <input 
        type="password" 
        name="password" 
        placeholder="password"
        onChange={handleChange}
        required
        />
        <button>Log In</button>
      </FormContainer>
    </FormWrapper>
  )
}

export default Login
