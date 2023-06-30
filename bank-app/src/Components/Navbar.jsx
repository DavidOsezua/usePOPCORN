import React, { useState } from 'react';
import {
  bgPatternCircles,
  logo,
  bgPatternIntroDesktop,
  Hamburger,
  Close,
} from '../assets';
import Hero from './Hero';
import styles from '../style';
import classes from './Navbar.module.css';
import '../index.css';
import { navLinks } from '../Data/data';
import Button from './Button';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={`container ${classes.navContainer}`}>
      {
        //`/******************* LOGO ***********************/`
      }

      <div>
        <img src={logo}  />
      </div>

      {
        //`/******************* MENU LIST ***********************/`
      }

      <ul
        className={`${classes.navMenu} ${
          toggle ? `${classes.showMenu} topbar` : ``
        }`}
        onClick={toggleHandler}
      >
        {navLinks.map((navLink) => (
          <li key={navLink.link}>
            <button>{navLink.link}</button>
          </li>
        ))}

        {
          //'/******************* LOGIN AND SIGNUP BUTTONS ***********************/'
        }
        <div className={`${classes.btn}`}>
          <Button buttonName={`Login`} styles={`${classes.btn1}`}>
            Login
          </Button>
          <Button buttonName={`Sign Up`} styles={`${classes.btn2}`}>
            Sign Up
          </Button>
        </div>
      </ul>

      {
        //'/******************* TOGGLE logic ***********************/'
      }
      <img
        src={toggle ? Close : Hamburger}
        onClick={toggleHandler}
        className={`${classes.toggle}`}
      />
    </nav>
  );
};

export default Navbar;
