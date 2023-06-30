import React from 'react';
import classes from './Button.module.css';

const Button = ({ styles, buttonName }) => {
  return <button className={` ${classes.btn} ${styles}`}>{buttonName}</button>;
};

export default Button;
