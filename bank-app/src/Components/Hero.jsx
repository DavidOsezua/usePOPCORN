import React from 'react';
import classes from './Hero.module.css';
import Button from './Button';

const Hero = () => {
  return (
    <section className={`${classes.content}`}>
      <div className={`${classes.contentContainer}`}>
        <h1 className={classes.contentTitle}>A modern publishing platform</h1>
        <p className={`${classes.contentText}`}>
          Grow your audience and build your online brand
        </p>
        <div className={`${classes.btnContainer}`}>
          <Button buttonName={`Start For Free`} styles={`${classes.btn1}`}>
            Start For Free
          </Button>
          <Button buttonName={`Learn More`} styles={`${classes.btn3}`}>
            Start For Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
