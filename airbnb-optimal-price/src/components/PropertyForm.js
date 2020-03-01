import React, {useState} from 'react';


const PropertyForm = props => {
const [property, setProperty]= useState({
    title: '',
    body:''
});

const handleChanges = e => {
    setProperty({...property,[e.target.name]: e.target.value });
   
};

const submitForm = e => {
    e.preventDefault();
    props.addNewPropery(property);
    setProperty({title:'', body:'' });
};
console.log("this shit",property);
return (
    <form onSubmit= {submitForm}>
    <lable htmlFor='title'>Property Title</lable>
    <br></br>
    <input 
    id='title'
    type='text'
    name='title'
    onChange={handleChanges}
    placeholder='title'
    value={property.title}
    />
    <br></br> 
    <br></br>
    <br></br>
    <lable htmlFor='property'>Summery the Property</lable>
    <br></br>
    <textarea 
    id='property'
    name='body'
    placeholder="Brief Summery of property."
    onChange={handleChanges}
    value={property.body}
    />
    <button type='submit'>Add Property</button>
    </form>
);

};

export default PropertyForm;