import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";


const PropertyList = () => {
 

  const deleteListing = () => {
    axiosWithAuth()
      .delete(`/listings${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("Something's broken", err))      
  };

  return (
    <div>

          <button onClick={() => deleteListing(listing)}>
              <span onClick={e => {
                    e.stopPropagation();
                    deleteListing (listing) }}>
                X
                  </span>
              </button>

 </div>
  )}
export default PropertyList;