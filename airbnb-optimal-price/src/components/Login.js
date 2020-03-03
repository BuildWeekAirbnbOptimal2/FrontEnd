import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  margin: 80px auto 0;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  input {
    padding: 5px;
    margin-bottom: 10px;
  }

  button {
    width: 120px;
    padding: 5px;
    background: #ff3d4d;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline-color: orange;
  }
`;

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setUser({
      [e.target.name]: e.target.value
    });
    console.log(user);
  };

  return (
    <FormWrapper>
      <FormContainer
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2>Sign in</h2>
        <input type="text" name="name" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Log In</button>
        <h6>Need an account?</h6>
        <Link to="/src/components/SignUp">Sign up</Link>
      </FormContainer>
    </FormWrapper>
  );
};

export default Login;
