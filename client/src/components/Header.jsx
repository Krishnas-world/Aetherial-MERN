import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch} from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
//! Header component

const Header = () => {
  const path = useLocation().pathname; //! This is used to get the current path of the page so we use the component useLoc from react-router-dom
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user); //! Makes the current user state
  const handleSignout = async () => {
    try {
      const res = await fetch('http:localhost:3000/server/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar className=" bg-black bg-opacity-40">
      <Link
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center"
      >
        <span>
          <img
            src="../../public/favicon.jpeg"
            alt="Aetherial Icon"
            className="h-8 "
          />
        </span>
        <span className="ml-2" style={{ fontFamily: "Montserrat" }}>
          AETHERIAL
        </span>{" "}
        {/* Text added here */}
      </Link>

      <div className="flex gap-2 md:order-2">
        {/* //! Added a button to change the modes of the page */}
        <Button className="w-14 h-10 hidden sm:inline" color="black" pill>
          <FaMoon /> {/* Added a moon icon to change the theme*/}
        </Button>
        {/* Adds the current user as the following in the header section */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signup">
            <Button color="" pill>
              <span style={{ fontSize: 19 }}>Sign In</span>
            </Button>
          </Link>
        )}
        <Navbar.Toggle /> {/*//! Adds a hamburger menu for the phone view */}
      </div>

      {/* Adding external navbar links */}

      <Navbar.Collapse>
        {" "}
        {/* //! without this, navbar content comes as bullets. (li tag) */}
        {/* //! As 2 <a> links cant be there under one navbar prop we change it as "div" */}
        <Navbar.Link active={path === "/"} as={"div"}>
          {" "}
          {/* We add this to show which of the page is active */}
          <Link
            to="/"
            className={`text-black ${
              path === "/" ? "font-bold" : ""
            } hover:text-gray-200`}
            style={{ fontSize: 19 }}
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/About"} as={"div"}>
          <Link
            to="/About"
            className={`text-black ${
              path === "/About" ? "font-bold" : ""
            } hover:text-gray-200`}
            style={{ fontSize: 19 }}
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Projects"} as={"div"}>
          <Link
            to="/Projects"
            className={`text-black ${
              path === "/Projects" ? "font-bold" : ""
            } hover:text-gray-200`}
            style={{ fontSize: 19 }}
          >
            Services
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
