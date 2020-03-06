import React, { useContext } from 'react'
import SignUp from './SignUp'
import Login from './Login'

import { LogUpContext } from '../utils/Store'



const LogUp = () => {

  const [isLogging] = useContext(LogUpContext)


  return (
    <div>
      { isLogging ? (
        <Login />
      ) : (
        <SignUp />
      )
      }
    </div>
  )
}

export default LogUp
