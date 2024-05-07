import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen flex justify-center items-center relative bg-gradient-to-b from-opacity-50 to-black' style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.985)), url('/helmet.jpeg')", backgroundSize: 'cover'}}>
      {/* Content */}
      <div className="z-20 text-center relative">
        <h1 className='font-bold text-white text-8xl  text-s letter-spacing tracking-wide' style={{fontSize: 100}}><b>AETHERIAL</b></h1>
        <p className="text-center text-2xl text-gray-400 m-3"><b>You Elevate Your Ride, We Safeguard Your Journey</b></p>
        <p className="text-white font-medium text-center m-12 text-2xl px-14">
          Aetherial is an innovative smart helmet designed to enhance road
          safety and provide advanced protection for riders. The helmet
          incorporates cutting-edge technology to address key safety concerns,
          including accident detection, emergency response, and preventive
          measures to ensure that riders wear their helmets.
        </p>
        <div className="flex justify-center">
          <Link to='/signup'><Button
            variant='outlined'
            sx={{
              color: 'white',
              paddingLeft: '2em',
              paddingRight: '2em',
              paddingTop: '1em',
              paddingBottom: '1em',
              borderColor: 'white',
              fontFamily: 'Montserrat',
              fontSize: 17,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
              '& #change': {
                color: 'white',
              },
            }}
          >
            <span id='change'>Login</span>
          </Button></Link>
        </div>
      </div>
    </div>
  );
}
