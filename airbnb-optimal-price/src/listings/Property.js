import React from 'react'
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
  
  const handleDelete = (e) => {

    axiosWithAuth()
    .delete(`host/${props.host_id}/properties/${props.listing.id}`)
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
      <BtnContainer>
        <button >Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </BtnContainer>
    </Container>
  )
}

export default Property;