import React, { useState } from "react";
import loginImg from '../assets/lognImg.jpg'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import { FormContainer, Form, Input, Button, H2, H5, Text, Text2, Text3, Text4, P, Section} from "./Style-Login";


function Login() {
  const [loginid, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("loginid: ", loginid);
    console.log("Password: ", password);
  }



  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  return (
    <FormContainer>
      <Section>
        <img src={loginImg} alt="login" height='400px' width='450px' />
      </Section>
      <br />
      <Form onSubmit={handleSubmit}>
        <H2>Login</H2>
        <H5>Login Id</H5>
        <Input type="text" placeholder="Enter Login ID" value={loginid} onChange={(event) => setLoginId(event.target.value)} />
        <H5>Password</H5>
        <Input type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password} onChange={(event) => setPassword(event.target.value)}/> 
        
        <AiOutlineEyeInvisible type="icon" onClick={handleShowPassword}> {showPassword ? "Hide" : "Show"} Password </AiOutlineEyeInvisible>
        
    
        
       
        <Text><Checkbox label=" Remember Me" value={checkedOne} onChange={handleChangeOne} /> <Text2> Forgot Password</Text2></Text>
        <br />
        <Text3>
        <Checkbox label=" Agree To" value={checkedTwo} onChange={handleChangeTwo} /><P> Terms & Conditon</P></Text3>
        <br />
        <Button type="submit">Login</Button>
        <Text4>Don't have an Account ? <P>  Register Here</P></Text4>
      </Form>
    </FormContainer>
  );
}



export default Login;







