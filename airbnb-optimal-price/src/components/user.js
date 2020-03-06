import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const User = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    axiosWithAuth()
    .get('/host/35/properties')
    .then( res => {
      console.log(res.data)
      setUser(res.data.message)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px'  }}>
      <h2>{user}</h2>
      
    </div>
  )
}

export default User;
