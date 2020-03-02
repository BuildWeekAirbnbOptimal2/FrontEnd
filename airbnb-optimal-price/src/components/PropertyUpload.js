import React, {useState} from 'react'
import axios from 'axios'
import '../index.css' ;



    const PropertyUpload = () => {
        const [image, setImage]= useState("");
        const [loading, setLoading]=useState(true);

        
        const uploadImage = e => {
            const file = e.target.files[0];
            const data = new FormData();
                data.append('upload_preset', 'this_one');
                data.append('file',file)
                setLoading(true)
                axios.post('https://api.cloudinary.com/v1_1/jorgescloud/image/upload', data)
                .then((response) => { setImage(response.data.secure_url)},3000)
                .then(setLoading(false))
                .catch(err => console.log('err', err));
                
        }
        console.log('image',image)
        return (
            <div>
                <input  type='file' name='user[image]' multiple={true} onChange={uploadImage}  /> 
            
                <div>
                    {loading ? <h1>Waiting...</h1> : <img src={image} alt='' className="new-photo"/>}
                </div>
            
            
            </div>
        )
    }
    export default PropertyUpload