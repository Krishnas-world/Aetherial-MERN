import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link, useLocation} from "react-router-dom"; //! You go to the page without refreshing the page
import { AiOutlineSearch } from "react-icons/ai"; //! Added a search icon
import { FaMoon } from "react-icons/fa";
//! Header component

const Header = () => {

  const path = useLocation().pathname; //! This is used to get the current path of the page so we use the component useLoc from react-router-dom


  return (
    <Navbar className=" border-b-2">
      <Link
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center" 
      >
        <span>
          <img src="../../public/favicon.jpeg" alt="Aetherial Icon" className="h-8" />
        </span>
        <span className="ml-2" style={{ fontFamily: 'Montserrat'}}>AETHERIAL</span> {/* Text added here */}
      </Link>
      {/* //!added a search button here */}
      <Button className="w-12 h-10 lg:hidden" color="red" pill> {/* //! added pill because it rounds the button */}
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        {/* //! Added a button to change the modes of the page */}
        <Button className="w-12 h-10 hidden sm:inline" color="grey" pill>
          <FaMoon /> {/* Added a moon icon to change the theme*/}
        </Button>

        <Link to="/signin">
          <Button color="red" pill>
            Sign In
          </Button>
        </Link>

        <Navbar.Toggle /> {/*//! Adds a hamburger menu for the phone view */}
      </div>

      {/* Adding external navbar links */}

        <Navbar.Collapse> {/* //! without this, navbar content comes as bullets. (li tag) */}
          
          {/* //! As 2 <a> links cant be there under one navbar prop we change it as "div" */}
          <Navbar.Link active={path === '/'} as={'div'}> {/* We add this to show which of the page is active */}
            <Link to="/">Home</Link> {/* //! Link tag helps to traverse one to next component */}
          </Navbar.Link>
          <Navbar.Link active={path === '/About'} as={'div'}>
            <Link to="/About">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Projects'}as={'div'}>
            <Link to="/Projects">Services</Link>
          </Navbar.Link>


        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
