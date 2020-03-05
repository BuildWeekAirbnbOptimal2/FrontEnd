import React, { useState, useEffect } from "react";
import axios from 'axios';



const PropertyPage  = (id) => {
  const [listing, setListing] = useState();

    useEffect(() => {

      axios
        .get("http://localhost:3000/")
        .then(res => setListing(res.id))
        .catch(err => console.log(err));
    }, []);
  
    return (
      <div className="listings">
        <h1>My Properties</h1>
        <p>{listing}  </p>
      </div>
    );
  }


export default PropertyPage;