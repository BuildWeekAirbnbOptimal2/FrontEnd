import React, { useState, useEffect, useContext } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import PropertyList from "./PropertyList";
import AddProperty from "./AddProperty";

import {UserIDContext} from '../utils/Store'


const HomePage = (props) => {
    console.log('home', props)
    const id = props.match.params.id
    const [property, setProperty] = useState ([])

    const {userID, setUserID} = useContext(UserIDContext)

    useEffect(() => {
        axiosWithAuth()
        .get(`/host/${id}/properties/`)
        // .then(res => setProperty(res.user_properties.id))
        .then(res =>  {
            console.log('result', res.data)
            if (res.data.message) {
                setProperty(res.data.message)
            } else {
                setProperty(res.data)
            }
        })
        .then(property => {
            console.log( 'property',  property);
            setUserID(id)
        })
        .catch(err => console.log(err, "An Error Has Ocurred "));
    }, []);
    console.log('userid', userID)
        return (
            <div>
                <h1>Add Property</h1>
                <AddProperty/>
                <PropertyList listings={property}/>
        
            </div>
        )
        };

        export default HomePage;