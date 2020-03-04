import React, { useState } from 'react'

export const logUpContext = React.createContext(false);

const Store = ({children}) => {
  const [isLogging, setLogging] = useState(false)

  return (
    <logUpContext.Provider value={[isLogging, setLogging]} >
      {children}
    </logUpContext.Provider>
  )
}

export default Store
