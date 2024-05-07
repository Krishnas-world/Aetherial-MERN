import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Label, TextInput, Button } from 'flowbite-react'



export default function Signup() {
  const [formData, setFormData] = useState(); //! Take the data by forming 2 usable states
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value }); //! We use setFormData wherever handlin the change in the form and spread operator to add the new data to the formData without changing old state
  }
  console.log(formData); //! Displays what changes i do

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = fetch('signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = (await res).json();
    } catch (error) {
      
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-3xl mx-auto p-8 bg-white bg-opacity-50 rounded shadow-md'>
        <div className='flex flex-col items-center'>
          <Link to='/' className='font-bold text-4xl'>
            <img
              src="../../public/favicon.jpeg"
              alt="Aetherial Icon"
              className="h-20"
            />
          </Link>
          <p className='text-center text-sm mt-5'>
            You can sign up with your email and password or with Google.
          </p>
        </div>
        <form className='mt-5 space-y-4' onSubmit={handleSubmit}> 
        {/* Made a handle submit function above to show what happens on submit */}
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} required />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange} required />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='password' placeholder='Password' id='password' onChange={handleChange} required />
          </div>
          <div className="flex justify-center">
            <Button type='submit' style={{ backgroundColor: 'black', color: 'white' }}>
              Sign Up
            </Button>
          </div>
        </form>
        <div className="flex justify-center text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500 ml-1'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
