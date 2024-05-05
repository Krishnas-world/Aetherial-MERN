import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //! We have route destructured
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from "./pages/Projects";
import Header from './components/Header';

// Fonts
import "typeface-montserrat";

export default function App() {
  return (
    <BrowserRouter> {/*! Structured the route for browser*/}
    <Header/> {/* WeKeep the header component above route so that it acts for the navbar present */}
      <Routes> {/* Defining all the routes*/}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}
