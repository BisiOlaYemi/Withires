import React, { useState } from 'react';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  let Links = [
    { name: 'Home', linkTo: '/' },
    { name: 'About us', linkTo: '/aboutwithires' },
    { name: 'Hire Professionals', linkTo: '/hireprofessionals' },
    { name: 'Courses', linkTo: '/courses' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='w-full'>
      <div className='md:flex justify-between py-4 md:px-10 px-7'>
        <div className='text-xl cursor-pointer flex items-center text-gray-800'>
          <Link to='/'>
          <img src={logo} alt='De-Benedict' style={{ width: '60px', height: 'auto' }} />
          </Link>
        </div>
        <div
          onClick={toggleMenu}
          className='text-indigo-950 text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          {isOpen ? <CgCloseO /> : <CgMenuRound />}
        </div>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center md:pl-0 md:pr-9 transition-all duration-500 ease-in`}
        >
          {Links.map((link) => (
            <li key={link.name} className='my-2 md:my-0 md:ml-8'>
              <Link
                to={link.linkTo}
                onClick={closeMenu}
                className='flex items-center text-xl text-indigo-950 hover:text-white duration-500 mt-4' style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
