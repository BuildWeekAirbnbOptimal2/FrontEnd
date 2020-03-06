import React, { useState, useEffect } from "react";
import axios from 'axios';
import PropertyList from "./PropertyList";
import AddProperty from "./AddProperty";



const HomePage = (props) => {
    const [property, setProperty] = useState ([])
    const id = props.match.params.id
    useEffect(() => {
        axios
        .get(`https://airbnboptimal.herokuapp.com/host/${id}/properties/`)
        // .then(res => setProperty(res.user_properties.id))
         .then(res =>  setProperty(res))
         .then(property => {
             console.log(property);
        
         })
        .catch(err => console.log(err, "An Error Has Ocurred "));
    }, []);
        return (
            <div>
                <h1>Add Property</h1>
                <AddProperty/>
                <PropertyList listings = {property}/>
        
            </div>
        )
        };

        export default HomePage;