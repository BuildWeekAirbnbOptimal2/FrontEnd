import React, {useState, useContext} from 'react';
import axios from 'axios';
import styled from "styled-components";

import { LogUpContext } from '../utils/Store'


const FormWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  text-align: center;
  margin: 20px auto 0;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 500px;
  border: 3px solid #c9c7c7;
  border-radius:15px;
  /* margin-left: 40%; */
  /* margin-bottom: 10%; */
  margin: 80px auto;
  box-shadow: 5px 10px 20px #c9c7c7 ;
  align-items: center;
   

  input {
      width:65%;
      border: 1.5px solid gray;
      border-radius:5px;
    padding: 5px;
    margin-bottom: 20px
  }

  button {
    margin-top: 35px;
    width: 160px;
    padding: 8px;
    background: #5f3739;
    color: #fff;
    border: none;
    border-radius: 4px;
  
  }`

const ToggleBtns = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin: 20px auto;

button {
  background: transparent;
  color: lightblue;
  border: none;
  font-size: 1.2rem;
  outline: transparent;
  cursor: pointer;  
}
`

const Signup = props => {
    const [user, setUser] = useState({
        firstname: "",
        lastname:"",
        email:"",
        username: '',
        password: ""
       
    });
  };
  
  
    const handleSubmit = e => {
      e.preventDefault();
      setIsLoading(true);
console.log(user);
         axios
            .post("https://airbnboptimal.herokuapp.com/user/register", user)
            .then(res => {
            console.log( res);
            setUser({
                firstname: "",
                lastname:"",
                email:"",
                password: "",
                username: ''
            });
          props.history.push("/login");
          window.location.reload(false);
        })
        setLogging(!isLogging)
        .catch(err => {
          console.log(err);
        });
    };
          
    const handleToggle = (e) => {
      e.preventDefault()
      setLogging(!isLogging)
    }
  
    return (
      <>  
        <FormContainer>
          <h1>Sign Up</h1>
          <FormWrapper onSubmit={handleSubmit}>
            <div className='signup'>  
                <input
                  type='text'
                  placeholder='First Name'
                  name='firstname'
                  value={user.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder='Last Name'
                  name='lastname'
                  type='text'
                  value={user.lastname}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder='Email'
                  name='email'
                  type='email'
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder='Username'
                  name='username'
                  type='text'
                  value={user.username}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder='GgitPassword'
                  name='password'
                  type='password'
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                
              <div>
                <button onClick={handleSubmit}>Sign Up</button>
              </div>

               
         </div>
        </FormWrapper>
          <ToggleBtns >
            <button onClick={handleToggle}>Log In</button>
          </ToggleBtns>
        </FormContainer>
      </>
    );

export default Signup;