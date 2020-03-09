import React, { useState } from "react";
import {axiosWithAuth}  from "../utils/axiosWithAuth";

const AddProperty = (props) => {
  console.log('add', props)
  const id = Number(props.id)
  console.log(id)

  const [property, setProperty] = useState(
      {
        id: id,
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

  const handleChange = e => {
    setProperty(
      {
        ...property,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post(`host/${id}/properties/`, property)
      .then(res => { 
        setProperty(
          {
            ...property,
            id: id,
            name: "",
            bedrooms: 0,
            bathrooms: 1,
            bed_type: "",
            room_type: "",
            maximum_nights: 0,
            minimum_nights: 0,
            extra_people: 0,
            accommodates: 0,
            Neighbourhood_group_cleansed: "",
            property_type: "",
            cancellation_policy: "",
            guests_included: 0,
            optimal_price: 0
          }
        )
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ display: 'flex', width: '660px', justifyContent: 'space-around', margin: '0 auto' }}>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={property.name}
        placeholder="Property Name"
        onChange={handleChange}
      />
     <input
        type="number"
        name="bedrooms"
        value={Number(property.bedrooms)}
        placeholder="Bedrooms"
        onChange={handleChange}
      />
      <input
        type="number"
        name="bathrooms"
        value={Number(property.bathrooms)}
        placeholder="Bathrooms"
        onChange={handleChange}
      />
      <input
        type="text"
        name="room_type"
        value={property.room_type}
        placeholder="room_type"
        onChange={handleChange}
      />
      <input
        type="text"
        name="bed_type"
        value={property.bed_type}
        placeholder="bed_type"
        onChange={handleChange}
      />
      <input
        type="number"
        name="maximum_nights"
        value={Number(property.maximum_nights)}
        placeholder="maximum_nights"
        onChange={handleChange}
      />
      <input
        type="number"
        name="minimum_nights"
        value={Number(property.minimum_nights)}
        placeholder="minimum_nights"
        onChange={handleChange}
      />
      <input
        type="number" 
        name="extra_people"
        value={Number(property.extra_people)}
        placeholder="extra_people"
        onChange={handleChange}
      />
      <input
        type="number"
        name="accomodates"
        value={Number(property.accommodates)}
        placeholder="accomodates"
        onChange={handleChange}
      />
      <input
        type="text"
        name="Neighbourhood_group_cleansed"
        value={property.Neighbourhood_group_cleansed}
        placeholder="Neighbourhood_group_cleansed"
        onChange={handleChange}
      />
      <input
        type="text"
        name="property_type"
        value={property.property_type}
        placeholder="property_type"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cancellation_policy"
        value={property.cancellation_policy}
        placeholder="cancellation_policy"
        onChange={handleChange}
      />
      <input
        type="number"
        name="guests_included"
        value={Number(property.guests_included)}
        placeholder="guests_included"
        onChange={handleChange}
      />
      <input
        type="number"
        name="optimal_price"
        value={property.optimal_price}
        placeholder="optimal_price"
        onChange={handleChange}
      />
      <button type="submit">Add Property</button>
    </form>
    </div> 
  );
};

export default AddProperty;