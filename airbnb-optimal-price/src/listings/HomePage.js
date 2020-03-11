import React, { useState, useEffect, useContext } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import PropertyList from "./PropertyList";
import AddProperty from "./AddProperty";

import {UserIDContext} from '../utils/Store'


const HomePage = (props) => {
    console.log('home', props)
    const id = props.match.params.id
    const [properties, setProperties] = useState([])

    const {userID, setUserID} = useContext(UserIDContext)


    const [property, setProperty] = useState(
        {
          name: "",
          bedrooms: 1,
          bathrooms: 1,
          bed_type: "",
          room_type: "",
         maximum_nights: 10,
          minimum_nights: 3,
          extra_people: 3,
          accommodates: 6,
          Neighbourhood_group_cleansed: "",
          property_type: "",
          cancellation_policy: "",
          guests_included: 2,
          optimal_price: 650
        })

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
    
    // const handleEdit = (e) => {
    //     e.preventDefault()

    //     console.log('start editing')
    //     axiosWithAuth()
    //     .put(`/host/${id}/properties/${id}`)
    //     .then( res => {
    //       setProperty({
    //         ...property,
    //           name: "",
    //           bedrooms: 0,
    //           bathrooms: 1,
    //           bed_type: "",
    //           room_type: "",
    //           maximum_nights: 0,
    //           minimum_nights: 0,
    //           extra_people: 0,
    //           accommodates: 0,
    //           Neighbourhood_group_cleansed: "",
    //           property_type: "",
    //           cancellation_policy: "",
    //           guests_included: 0,
    //           optimal_price: 0
    //       })  
    //     })

    //     .catch(err => {
    //       console.log(err)
    //     })
    //   }


    return (
        <div>
            <AddProperty id={id} />
            <PropertyList properties={properties} host_id={id}/>
        </div>
    )
    };

        export default HomePage;