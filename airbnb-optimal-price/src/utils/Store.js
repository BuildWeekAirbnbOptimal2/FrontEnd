import React, { useState } from 'react'

export const LogUpContext = React.createContext(false)
export const UserIDContext = React.createContext('')

const Store = ({children}) => {
  const [isLogging, setLogging] = useState(false)
  const [userID, setUserID  ] = useState('')
  // const [hostListings, setHostListings] = useState([])

  return (
    <LogUpContext.Provider value={[isLogging, setLogging]} >
      <UserIDContext.Provider value={{ userID, setUserID }}>
        {children}
      </UserIDContext.Provider>
    </LogUpContext.Provider>
  )
}

export default Store
