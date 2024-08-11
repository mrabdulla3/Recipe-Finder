import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchInput}`);
    // console.log('Search query:', searchInput);
    // Implement the logic to handle the search query here
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Recipe Finder</h1>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-links">About</a>
          </li>
          <li className="nav-item dropdown">
            <div className="nav-links" onClick={toggleDropdown}>
              Category
              <span className="dropdown-icon">{dropdownOpen ? '▲' : '▼'}</span>
            </div>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <Link to={`/category/indian`} className='dropdown-links'>
                  <li>Indian</li></Link>
                <Link to={`/category/american`} className='dropdown-links'>
                  <li>American</li></Link>
                <Link to={`/category/chinese`} className='dropdown-links'>
                  <li>Chinese</li></Link>
                <Link to={`/category/british`} className='dropdown-links'>
                  <li>British</li></Link>
                <Link to={`/category/thai`} className='dropdown-links'>
                  <li>Thai</li></Link>
                <Link to={`/category/canadian`} className='dropdown-links'>
                  <li>Canadian</li></Link>
                <Link to={`/category/italian`} className='dropdown-links'>
                  <li>Italian</li></Link>
                <Link to={`/category/japanese`} className='dropdown-links'>
                  <li>Japanese</li></Link>
                <Link to={`/category/turkish`} className='dropdown-links'>
                  <li>Turkish</li></Link>
                <Link to={`/category/russian`} className='dropdown-links'>
                  <li>Russian</li></Link>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-links">Contact</a>
          </li>
          <li className="nav-item">
            <form onSubmit={handleSearchSubmit} className="nav-search-form">
              <input
                type="text"
                className="nav-search-input"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search..."
              />
              <button type="submit" className="nav-search-button">Search</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
