import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

const LogUp = () => {

  const [isLogging, setLogging] = useState(false)

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setLogging(!isLogging)
  //   console.log(isLogging)
  // }

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', margin: '40px auto' }}>
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
