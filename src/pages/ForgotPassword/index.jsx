import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.scss';
import Card from 'components/Card';

const ForgotPassword = (props) => {
    const navigate = useNavigate();
    const [newPwd, setNewPwd] = useState({email:'', password:''});

    const handleChange = (e) => {
      setNewPwd(e.target.value)
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <Card>
      <form className='form m-4' onSubmit={handleSubmit}>
          <h1 className='my-4'>Forgot Password</h1>
          <input  type="password" name='password' className='form-control-lg my-3' placeholder='Enter new password'  onChange={handleChange} value={newPwd} />
          <button type="submit" className='my-4 loginBtn'>Enter</button>
        </form>
    </Card>
  )
}

export default ForgotPassword