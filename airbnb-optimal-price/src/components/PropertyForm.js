import React, {useState} from 'react';
import PropertyUpload from './PropertyUpload';


const PropertyForm = props => {
    const [property, setProperty]= useState({
        title: '',
        body:'',
    
});

const handleChanges = e => {
    setProperty({
        ...property,
        [e.target.name]:
         e.target.value});
   
};

const submitForm = e => {
    e.preventDefault();
        props.addNewPropery(property);
            setProperty({
                title:'', 
                body:''
            });
    
};




        return (
            

            <form onSubmit= {submitForm}>
                 <lable htmlFor='title'>Property Title</lable>
                   <br/>
                    <input 
                    id='title'
                    type='text'
                    name='title'
                    onChange={handleChanges}
                    placeholder='title'
                    value={property.title}
                    />
                <br/> 
             <br/>
              <br/>
                <lable htmlFor='property'>Summery the Property</lable>
                  <br/>
                <textarea 
                id='property'
                name='body'
                placeholder="Brief Summery of property."
                onChange={handleChanges}
                value={property.body}
                />
            <br/>
        
      <label>Property Type</label>
      <br/>
     
       <select name='propertyType' id='propertyType'>
          
            <option value>-Please select one-</option>
            <option value="House">House</option>
            <option value="">Apartment</option>
            <option value="">Villa</option>
            <option value="">Hotel</option>
            <option value="">Couch</option>
            <option value="">Tent</option>
            <option value="">Tree House</option>
            <option value="">Other</option>
       </select>
       <br/>
       <br/>
       <label>Room Type</label>
       <br/>
      
        <select name='propertyType' id='propertyType'>
           
             <option value>-Please select one-</option>
             <option value="House">Entire House</option>
             <option value="">Private Room</option>
             <option value="">Shared House</option>
             <option value="">Hotel Room</option>
             <option value="">Shared Apartment</option>
        </select>
        <br/>
        <br/>
       <label>Book Instantly?</label>
       <br/>
       <input 
       id='Ibook'
       name='Ibook'
       type='checkbox'
       value=''
       />
       <br/>
       <br/>
       <br/>
       <br/>
      <label>Hot Water?</label>
      <br/>
      <input 
      id='water'
      name='water'
      type='checkbox'
      value=''
      />
      <br/>
      <br/>
      <br/>
        <br/>
       <label>Smoke Detectors?</label>
       br//>
       <input 
       id='smoke'
       name='smoke'
       type='checkbox'
       value=''
       />
       
       <br/>
       <br/>
        <br/>
       <label>Near Shopping Center?</label>
       <br/>
       <input 
       id='Ibook'
       name='Ibook'
       type='checkbox'
       value=''
       />
       <br/>
       <br/>
       <br/>
        <br/>
       <label>Near Public Trasportation?</label>
       <br/>
       <input 
       id='publicT'
       name='publicT'
       type='checkbox'
       value=''
       />
       <br/>
       <br/>
       <br/>
        <br/>
       <label>Pets Allowed?</label>
       <br/>
       <input 
       id='pets'
       name='pets'
       type='checkbox'
       value=''
       />
       <br/>
       <br/>
    <PropertyUpload />
     <button type='submit'>Add Property</button>
       </form>
   );
};

export default PropertyForm;