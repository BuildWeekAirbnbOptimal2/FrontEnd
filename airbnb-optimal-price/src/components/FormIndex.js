import React, {useState} from 'react';
import Property from './Property'
import PropertyForm from './PropertyForm';


export default function FormIndex(){
    const [photo, setPhoto]=useState([{
        selectedFile:null
    }])
    const [properties, setProperties]= useState([{
        id: 1,
        title: '',
        body:''
    }]);
    const addNewPropery = property => {
        const newProperty = {
            id: Date.now(),
            title: property.title,
            body: property.body
    };
            setProperties([...properties, newProperty]);
    };
    const addNewPhoto = photos => {
        const newPhoto = {
            selectedFile:photos.selectedFile
    }
            setPhoto([...photo,newPhoto])
    }
                return(
                    <div>
                        <h1>Add Properties</h1>
                        <PropertyForm addNewPropery={addNewPropery} addNewPhoto={addNewPhoto}/>
                        <Property properties={properties}/>

                    </div>
                    )
            };

