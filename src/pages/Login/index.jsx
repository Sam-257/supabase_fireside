import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import Card from 'components/Card';

const Login = (props) => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({email:'', password:''});
    const [userData, setUserData] = useState([]);

    const handleChange = (e) => {
      setLoginForm({...loginForm, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <Card>
      <form className='form m-4' onSubmit={handleSubmit}>
          <h1 className='my-4'>Login</h1>
          <input type="email" name='email' className='form-control-lg my-3' placeholder='Enter your Email' onChange={handleChange} value={loginForm.email} />
          <input  type="password" name='password' className='form-control-lg my-3' placeholder='Enter your Password'  onChange={handleChange} value={loginForm.password} />
          <button type="submit" className='my-4 loginBtn'>Login</button>
        </form>
    </Card>
  )
}

export default Login