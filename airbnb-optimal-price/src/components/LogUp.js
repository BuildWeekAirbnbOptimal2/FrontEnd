import React, { useContext } from 'react'
import SignUp from './SignUp'
import Login from './Login'

import { logUpContext } from '../utils/Store'



const LogUp = () => {

  const [isLogging] = useContext(logUpContext)


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
