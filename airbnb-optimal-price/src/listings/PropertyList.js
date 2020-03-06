import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

//Property Components
import AddProperty from './AddProperty';
import Property from './Property';


const PropertyList = (props) => {
    console.log('p-list', props)
    const [listings, setListings] = useState([])
  
    useEffect(() => {
      axiosWithAuth()
      .get("/hostId/properties")
      .then(res => setListings(res.user_properties))
      .catch(err => console.error(err))
    })
  
    return(
      <>
        <h1 style={{ textAlign: 'center' }}> My Listings</h1>
        {listings.length === 0 ? (
          <>
        <h2 style={{ textAlign: 'center', color: 'red' }}>{props.listings}</h2>
        </>
        ) : (
          listings.map(listing => (
            <div key={listing.id}>
              <Property listing={listing} />
            </div>
          ))
          )
        }

      </>
    )
  
  }
  
export default PropertyList;