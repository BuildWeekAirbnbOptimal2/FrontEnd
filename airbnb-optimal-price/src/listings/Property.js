import React from 'react'

const Property = props => {
  return (
    <div>
      <h2>{props.listing.name}</h2>
      <p>{props.listing.bedrooms}</p>
      <p>{props.listing.bathrooms}</p>
      <p>{props.listing.bed_type}</p>
    </div>
  )
}

export default Property;