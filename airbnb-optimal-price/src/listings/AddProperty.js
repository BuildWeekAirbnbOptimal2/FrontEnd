import React, { useState } from "react";
import {axiosWithAuth}  from "../utils/axiosWithAuth";

const AddProperty = (props) => {
  console.log('add', props)
  // const id = props.match.params.id

  const [property, setProperty] = useState(
      {
        id: "",
        name: "",
        bedrooms: 0,
        bathrooms: 0,
        bed_type: "",
        room_type: "",
       maximum_nights: 10,
        minimum_nights: 3,
        extra_people: 3,
        accommodates: 6,
        Neighbourhood_group_cleansed: "Deep Dive initiative",
        property_type: "",
        cancellation_policy: "Mild",
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
      .post("host/11/properties/", property)
      .then(res => { 
        setProperty(
          {
            ...property,
            id: 11,
            name: "",
            bedrooms:"" ,
            bathrooms: 1,
            bed_type: "",
            room_type: "Entire home",
            maximum_nights: 10,
            minimum_nights: 3,
            extra_people: 3,
            accommodates: 6,
            Neighbourhood_group_cleansed: "Deep Dive initiative",
            property_type: "",
            cancellation_policy: "Mild",
            guests_included: 2,
            optimal_price: 650
          }
        )
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={property.name}
        placeholder="Property Name"
        onChange={handleChange}
      />
     <input
        type="text"
        name="bedrooms"
        value={property.bedrooms}
        placeholder="Bedrooms"
        onChange={handleChange}
      />
        <input
        type="text"
        name="bathrooms"
        value={property.bathrooms}
        placeholder="Bathrooms"
        onChange={handleChange}
      />
 <input
        type="text"
        name="bed_type"
        value={property.bed_type}
        placeholder="bed_type"
        onChange={handleChange}
      />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;