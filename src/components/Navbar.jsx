import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 relative">
      <img
        onClick={() => navigate('/')}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/astrologers">
          <li className="py-1">ASTROLOGERS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      {/* Right Side - Profile or Login */}
      <div className="flex items-center gap-4 relative">
        {token ? (
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            {/* Animated Dropdown */}
            <div
              className={`absolute right-0 top-14 bg-stone-100 rounded shadow-md min-w-48 p-4 flex flex-col gap-4 text-base font-medium text-gray-600 transition-all duration-300 ${
                showDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}
            >
              <p
                onClick={() => {
                  navigate('/my-profile');
                  setShowDropdown(false);
                }}
                className="hover:text-black cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => {
                  navigate('/my-appointments');
                  setShowDropdown(false);
                }}
                className="hover:text-black cursor-pointer"
              >
                My Appointments
              </p>
              <p
                onClick={() => {
                  setToken(false);
                  setShowDropdown(false);
                }}
                className="hover:text-black cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-3 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}


        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />

        {/* ----------------- Mobile Menu with Slide Animation ----------------- */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-30 transform transition-transform duration-300 ease-in-out ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          } shadow-lg`}
        >
          <div className="flex items-center justify-between px-5 py-6 border-b border-b-gray-400">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>

          <ul className="flex flex-col items-start gap-2 px-5 pt-6 font-medium text-gray-600">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/astrologers">
              <p className="px-4 py-2 rounded inline-block">ASTROLOGERS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>

        {/* Overlay behind the mobile menu */}
        {showMenu && (
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 bg-black opacity-30 z-20"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
