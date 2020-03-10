import React, { useState, useEffect, useContext } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import PropertyList from "./PropertyList";
import AddProperty from "./AddProperty";

import {UserIDContext} from '../utils/Store'


const HomePage = (props) => {
    console.log('home', props)
    const id = props.match.params.id
    const [properties, setProperties] = useState ([])

    const {userID, setUserID} = useContext(UserIDContext)

    useEffect(() => {
        axiosWithAuth()
        .get(`/host/${id}/properties/`)
        // .then(res => setProperty(res.user_properties.id))
        .then(res =>  {
            console.log('result', res.data.user_properties)
            if (res.data.message) {
                setProperties(res.data.message)
            } else {
                setProperties(res.data.user_properties)
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
                <h1 style={{ textAlign: 'center' }} >Add Property</h1>
                <AddProperty id={id}/>
                <PropertyList properties={properties}/>
        
            </div>
        )
        };

        export default HomePage;