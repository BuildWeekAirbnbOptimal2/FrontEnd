import React from 'react';

const Property = props => {
    
    return(
        <div>
        {props.properties.map( property =>(
            <div key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.body}</p>
            </div>
        ))}
        </div>
    );
        };

        export default Property;