import React, { useState } from 'react'
import styled from 'styled-components'

const FormD = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  margin: 80px auto 0;
`

const FormCon = styled.form`
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


export default function SignUp() {

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
      <FormD>
        <FormCon onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
        <h2>Sign up</h2>
          <input type="text" name="name" placeholder="username" />
          <input type="password" name="password" placeholder="password"/>
          <button>Sign up</button>
        </FormCon>
      </FormD>
    )
  }
  

  