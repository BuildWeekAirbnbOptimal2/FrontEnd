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
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteListing (listing) }}>
                  x
                  </span>
              </button>

 </div>
  )}
export default PropertyList;