import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
