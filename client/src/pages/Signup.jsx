import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await axios.post('http://localhost:3000/server/auth/signup', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(res);
      if (res.data.success === false) {
        return setErrorMessage(res.data.message);
      }
      setLoading(false);
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-3xl mx-auto p-8 bg-white bg-opacity-50 rounded shadow-md'>
        <div className='flex flex-col items-center'>
          <Link to='/' className='font-bold text-4xl'>
            <img
              src={'/favicon.jpeg'}
              alt="Aetherial Icon"
              className="h-20"
            />
          </Link>
          <p className='text-center text-sm mt-5'>
            You can sign up with your email and password or with Google.
          </p>
        </div>
        <form className='mt-5 space-y-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}  />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}  />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='password' placeholder='Password' id='password' onChange={handleChange} />
          </div>
          <Button
            type='submit'
            disabled={loading}
            style={{backgroundColor:'black'}}
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/signin' className='text-blue-500'>
            Sign In
          </Link>
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
