import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

//Property Components
import AddProperty from './AddProperty';
import Property from './Property';


const PropertyList = () => {
 
    const [listings, setListings] = useState([])
  
    useEffect(() => {
      axiosWithAuth()
      .get("/hostId/properties")
      .then(res => setListings(res.user_properties))
      .catch(err => console.error(err))
    })
  
    return(
      <>
        <h1> My Listings</h1>
        {listings.map(listing => (
          <div key={listing.id}>
            <Property listing={listing} />
          </div>
        ))}
      </>
    )
  
  }
  
export default PropertyList;