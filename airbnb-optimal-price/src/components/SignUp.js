import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from "styled-components"


const SignUpCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 300px;
    margin-top: 20%;
     margin-left: 20%;
     display: flex;
     flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;
`;
const Title = styled.h1`
    font-family: Caladea;
    text-align: center;
    padding-top: 0.5rem;
`;

export const input = styled.div`
    width: 350px;
    height: 30px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-family: inherit;
    font-size: 100%;
    padding: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    align-items: center;
`;

export const Button = styled.button`
    background: #500A30;
    box-shadow: white;
    color:white;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem auto;
    font-family: inherit;

    &:hover {
        background: #5F3739;
        color: white;
    }
`;




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
  git
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
   
     <SignUpCard>
          <Title>Sign Up</Title>
          <form onSubmit={handleSubmit}>
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
                <Button type='submit'>Sign Up</Button>
              </div>
                 {/* <link to=''>I already have an account</link> */}
               
         </div>
        </form>
        </SignUpCard>
        
    );
  };
export default Signup;