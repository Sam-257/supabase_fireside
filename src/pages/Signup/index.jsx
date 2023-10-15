import React, {useState} from 'react';
import './signUp.scss';
import Card from 'components/Card';

const SignUp = () => {
    const [signUpForm, setSignUpForm] = useState({email:'', password:'', data: {name: ''}});

    const handleChange = (e) => {
      if (e.target.name === 'name'){
        setSignUpForm({...signUpForm, data: {name: e.target.value }});
      } else {
        setSignUpForm({...signUpForm, [e.target.name]: e.target.value})
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
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