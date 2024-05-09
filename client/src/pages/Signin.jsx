import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
// import {signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice.js';
// import { dispatch } from 'react-redux'; //! We use this to distpatch redux works logic

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('All fields are required');
    }
    try {
      // dispatch(signInStart())
      const res = await axios.post('http://localhost:3000/server/auth/signin', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status === 200) {
        setLoading(false);
        navigate('/');
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Internal Server Error');
      } else {
        setErrorMessage('Network Error');
      }
    }
  };
  
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-lg w-full p-8 bg-white bg-opacity-50 rounded shadow-md'>
        <div className='flex flex-col items-center'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
          <img
              src={'/favicon.jpeg'}
              alt="Aetherial Icon"
              className="h-56 m-10"
            />
          </Link>
          <p className='text-center text-sm mt-5'>
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        <form className='mt-5 space-y-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your email' />
            <TextInput
              type='email'
              placeholder='name@company.com'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput
              type='password'
              placeholder='**********'
              id='password'
              onChange={handleChange}
            />
          </div>
          <Button
            style={{backgroundColor:'black'}}
            type='submit'
            disabled={loading}
            className='w-full'
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5 justify-center'>
          <span>Don't have an account?</span>
          <Link to='/signup' className='text-blue-500'>Sign Up</Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}
