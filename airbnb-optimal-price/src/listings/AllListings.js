import React, { useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


// pass host ID via Context.

const AllListings = () => {

  //  useEffect(() => {
  //   axiosWithAuth()
  //   .get(`/host/${hostId}/properties`)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  return (
    <div>
      <h1>All Listings</h1>
    </div>
  )
}

export default AllListings
