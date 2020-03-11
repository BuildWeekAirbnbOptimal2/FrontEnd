import React, { useState } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Container = styled.div`
  color: #333;
  text-align: center;
  box-shadow: 5px 10px 20px #c9c7c7;
  width: 350px;
  padding: 10px;
  margin: 10px;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Property = props => {
  console.log('1prop', props)

  const [isEditing, setEditing] = useState(false)
  const [editListing, setEditListing] = useState({
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        bed_type: "",
        room_type: "",
       maximum_nights: 10,
        minimum_nights: 3,
        extra_people: 3,
        accommodates: 6,
        Neighbourhood_group_cleansed: "",
        property_type: "",
        cancellation_policy: "",
        guests_included: 2,
        optimal_price: 650
  })
  
  const handleDelete = (e) => {
    axiosWithAuth()
    .delete(`host/${props.host_id}/properties/${props.listing.id}`)
    .then(res => {

    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (e) => {
    e.preventDefault()
    setEditListing({
      ...editListing,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = (e) => {
    setEditing(true)
    
  }

  const handleSubmit = (e) => {
    console.log(props.host_id)
    console.log(props.listing.id)
    e.preventDefault()
    const host_id = Number(props.host_id)
    axiosWithAuth()
    .put(`host/${host_id}/properties/${props.listing.id}`, editListing)
    .then(res => {
      
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  
  return (
    <Container>
      <h2>{props.listing.name}</h2>
      <p>{props.listing.bedrooms}</p>
      <p>{props.listing.bathrooms}</p>
      <p>{props.listing.bed_type}</p>
      {isEditing && (
        <form action="">
          <input
          type="text"
          name="name"
          value={editListing.name}
          placeholder="Property Name"
          onChange={handleChange}
        />
       <input
          type="number"
          name="bedrooms"
          value={Number(editListing.bedrooms)}
          placeholder="Bedrooms"
          onChange={handleChange}
        />
        <input
          type="number"
          name="bathrooms"
          value={Number(editListing.bathrooms)}
          placeholder="Bathrooms"
          onChange={handleChange}
        />
        <input
          type="text"
          name="room_type"
          value={editListing.room_type}
          placeholder="room_type"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bed_type"
          value={editListing.bed_type}
          placeholder="bed_type"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maximum_nights"
          value={Number(editListing.maximum_nights)}
          placeholder="maximum_nights"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minimum_nights"
          value={Number(editListing.minimum_nights)}
          placeholder="minimum_nights"
          onChange={handleChange}
        />
        <input
          type="number" 
          name="extra_people"
          value={Number(editListing.extra_people)}
          placeholder="extra_people"
          onChange={handleChange}
        />
        <input
          type="number"
          name="accomodates"
          value={Number(editListing.accommodates)}
          placeholder="accomodates"
          onChange={handleChange}
        />
        <input
          type="text"
          name="Neighbourhood_group_cleansed"
          value={editListing.Neighbourhood_group_cleansed}
          placeholder="Neighbourhood_group_cleansed"
          onChange={handleChange}
        />
        <input
          type="text"
          name="property_type"
          value={editListing.property_type}
          placeholder="property_type"
          onChange={handleChange}
        />
        <input
          type="text"
          name="cancellation_policy"
          value={editListing.cancellation_policy}
          placeholder="cancellation_policy"
          onChange={handleChange}
        />
        <input
          type="number"
          name="guests_included"
          value={Number(editListing.guests_included)}
          placeholder="guests_included"
          onChange={handleChange}
        />
        <input
          type="number"
          name="optimal_price"
          value={editListing.optimal_price}
          placeholder="optimal_price"
          onChange={handleChange}
        />
          <button onClick={handleSubmit}>Submit</button>
        </form>  
      )}
      <BtnContainer>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </BtnContainer>
    </Container>
  )
}

export default Property;