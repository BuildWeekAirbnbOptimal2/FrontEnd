import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import styled from 'styled-components';

import Property from './Property';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;
`

//Property Components
// import AddProperty from './AddProperty';


const PropertyList = (props) => {
    console.log('p-list', props)
    const [listings, setListings] = useState([])

    useEffect(() => {
      axiosWithAuth()
      .get(`/${props.host_id}/properties`)
      .then(res => setListings(res.user_properties))
      .catch(err => console.error(err))
    },[])
    
    return(
      <div>
        <h1 style={{ textAlign: 'center' }}> My Listings</h1>
        {!listings ? (
          <div>
            <h2 style={{ textAlign: 'center', color: 'red' }}>{listings}</h2>
          </div>
        ) : (
          <Container>
            {props.properties.map(listing => (
              <div key={listing.id}>
                <Property listing={listing} host_id={props.host_id}/>
              </div>
            ))}
          </Container>
          )
        }
      </div>
    )
  
  }
  
export default PropertyList;