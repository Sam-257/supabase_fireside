import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.scss';
import Card from 'components/Card';
import supabaseClient from 'config/supabaseClient';

const SignUp = (props) => {
    const navigate = useNavigate();
    const [signUpForm, setSignUpForm] = useState({email:'', password:'', data: {name: ''}});
    const [userData, setUserData] = useState([]);

    const handleChange = (e) => {
      if (e.target.name === 'name'){
        setSignUpForm({...signUpForm, data: {name: e.target.value }});
      } else {
        setSignUpForm({...signUpForm, [e.target.name]: e.target.value})
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // supabaseClient.auth.signUp(signUpForm)
      // const { data, error } = await supabaseClient.auth.signUp({
      //   email: 'example@email.com',
      //   password: 'example-password',
      // })
      supabaseClient.auth.signUp(signUpForm)
        .then((response) => console.log('signUp', response))
    }

  return (
    <Card>
      <form className='form m-4' onSubmit={handleSubmit}>
          <h1 className='my-4'>Sign Up</h1>
          <input type="text" name='name' className='form-control-lg my-3' placeholder='Enter your Name' onChange={handleChange} value={signUpForm.name} />
          <input type="email" name='email' className='form-control-lg my-3' placeholder='Enter your Email' onChange={handleChange} value={signUpForm.email} />
          <input  type="password" name='password' className='form-control-lg my-3' placeholder='Enter your Password'  onChange={handleChange} value={signUpForm.password} />
          <button type="submit" className='my-4 signUpBtn'>Sign Up</button>
        </form>
    </Card>
  )
}

export default SignUp