import React, { useState } from 'react'
import styled from 'styled-components'
import SignUp from './SignUp'
import Login from './Login'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 40px auto;
`

const LogUp = () => {

  const [isLogging, setLogging] = useState(false)

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setLogging(!isLogging)
  //   console.log(isLogging)
  // }

  return (
    <div>
      { isLogging ? (
        <Login isLogging={isLogging} setLogging={setLogging} />
      ) : (
        <SignUp isLogging={isLogging} setLogging={setLogging}/>
      )
      }
    </div>
  )
}

export default LogUp
