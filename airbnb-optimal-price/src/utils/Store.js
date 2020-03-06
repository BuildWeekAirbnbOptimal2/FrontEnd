import React, { useState } from 'react'

export const LogUpContext = React.createContext(false)
export const ListingsContext = React.createContext([])

const Store = ({children}) => {
  const [isLogging, setLogging] = useState(false)
  // const [hostListings, setHostListings] = useState([])

  return (
    <LogUpContext.Provider value={[isLogging, setLogging]} >
      
      {children}
    </LogUpContext.Provider>
  )
}

export default Store
