import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const PropertyUpload = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  // const [images, setimages] = useState('');
  // const [cameback, setBack] = useState([]);

  const uploadImage = e => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("upload_preset", "this_one");
    data.append("file", file);
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/jorgescloud/image/upload", data)
      .then(response => {
        setImage(response.data.secure_url);
        console.log("image", response.data.secure_url);
        // setimages("image",response.data.public_id);
      }, 3000)
      .then(setLoading(false))
      .catch(err => console.log("err", err));
  };
  // const PropertyInfo = e => {
  //   // const [getPhoto, setPhoto] = useState({});
  //   console.log(images)
  //   // const file = e.target.files;
  //   const data = new FormData();
  //   // data.append("file", file);
  //   useEffect(
  //     () => {
  //       axios
  //         .get(
  //           `https://991455645283966:rCcThMm0RoPqdSxBMj3mba7hrVQ@api.cloudinary.com/v1_1/jorgescloud/image/list/${images}`
  //         )
  //         .then(response => {
  //           console.log(response.data.results);
  //           setBack(response.data.results);
  //           const char = response.data.results;
  //           console.log("char", char);
  //         })
  //         .catch(error => {
  //           console.log("something went wrong", error);
  //         });
  //     },
  //     [data],
  //     3000
  //   );

  //   return (
  //     console.log("cameback",cameback)
  //   )
    
  //   }

  // PropertyInfo();
  
  return (
    <div>
      <input
        type="file"
        name="user[image]"
        multiple={true}
        onChange={uploadImage}
      />
      <div>
        {loading ? (
          <h1>Waiting...</h1>
        ) : (
          <img src={image} alt="" className="new-photo" />
        )}
      </div>
      <div>
      </div>
    </div>
  );
};
export default PropertyUpload;
