import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const User = (props) => {

  const [user, setUser] = useState()

  const id = props.match.params.id
  useEffect(() => {
    axiosWithAuth()
    .get(`/host/${id}/properties`)
    .then( res => {
      // console.log(res.data.user_properties)
      setUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[id])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px'  }}>
      {/* { forEach(user => (
        <h2>{user.name}</h2>
      ))} */}
      
    </div>
  )
}

export default User;
