import React, {useState} from 'react';
import axios from 'axios'

const PropertyForm = props => {
const [photo, setPhoto]=useState({
    selectedFile:null
})
const [property, setProperty]= useState({
    title: '',
    body:'',
    
});

const handleChanges = e => {
    setProperty({...property,[e.target.name]: e.target.value});
   
};

const submitForm = e => {
    e.preventDefault();
    props.addNewPropery(property);
    setProperty({title:'', body:''});
    setPhoto({selectedFile:null})
};

const onChangeHandler = e =>{
    console.log("phtos",e.target.files[0])
    setPhoto({...photo,
        [e.target.selectedFile]: e.target.files[0],
        loaded:0,
    })
    
}
const onClickHandler = () =>{
    const data = new FormData()
    data.append('file',photo.selectedFile)
    axios.post('http://localhost:8000/upload',data,{
        //reciece two parameter endpoint url and form data
    })
    .then(response =>{
        //prints response status
        console.log(response.statusText)
    })
}

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
    <br></br>
    <br></br>
    <br></br>
    <input
    id='file'
    type='file'
    name='file'
    file='file'
    onChange={onClickHandler}
    onClick={onChangeHandler}
    value={photo.onChangeHandler}
    
    />
    <button type="button" className="btn btn-success btn-block" value={photo.onClickHandler} onClick={onClickHandler}>Upload</button> 
    
    <button type='submit'>Add Property</button>
    </form>
);

};

export default PropertyForm;