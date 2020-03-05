import React, { useState, useEffect } from "react";
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";



const HomePage = () => {
    const [property, setProperty] = useState ()

    useEffect(() => {
        axiosWithAuth()
        .get("https://airbnboptimal.herokuapp.com/host/4/properties/")
        // .then(res => setProperty(res.user_properties.id))
         .then(res => console.log(res) )
        .catch(err => console.log(err, "An Error Has Ocurred "));
    }, []);
        return (
            <div>
                <h1>My Properties</h1>
                <h3> {property}</h3>
            </div>
        )
        };

        export default HomePage;