import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from "styled-components";


const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  margin: 80px auto 0;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 450px;
  border: 3px solid #c9c7c7;
  border-radius:15px;
  margin-left: 40%;
  box-shadow: 5px 10px 20px #c9c7c7 ;
  align-items: center;
   

  input {
      width:65%;
      border: 1.5px solid gray;
      border-radius:5px;
    padding: 5px;
    margin-bottom: 10px
  }

  button {
    width: 120px;
    padding: 5px;
    background: #5f3739;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline-color: orange;
  }`

const Signup = props => {
    const [user, setUser] = useState({
        firstname: "",
        lastname:"",
        city:'',
        state:"",
        password: "",
        username: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
         axiosWithAuth()
            .post("",user)
            .then(res => {
            console.log('Test:', res);
            setUser({
                firstname: "",
                lastname:"",
                city:'',
                state:"",
                password: "",
                username: ''
            });
          props.history.push('');
          window.location.reload(false);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    return (
   
     <FormContainer>
          <h1>Sign Up</h1>
          <FormWrapper onSubmit={handleSubmit}>
            <div className='signup'>  
                <input
                  type='text'
                  placeholder='First Name'
                  name='firstName'
                  value={user.firstName}
                  onChange={handleChange}
                  required
                />
                 <input
                  placeholder='Last Name'
                  name='lastname'
                  type='lastname'
                  value={user.lastname}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder='City'
                  name='city'
                  type='text'
                  value={user.city}
                  onChange={handleChange}
                  required
                />
                 <input
                  placeholder='State'
                  name='state'
                  type='state'
                  value={user.state}
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
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                
              <div>
                <button type='submit'>Sign Up</button>
              </div>
                 {/* <link to=''>I already have an account</link> */}
               
         </div>
        </FormWrapper>
        </FormContainer>
        
    );
  };
export default Signup;