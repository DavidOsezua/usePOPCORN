import React from 'react';
import '../index.css';
import classes from './DesignedFuture.module.css';
import { illustrationEditorDesktop, illustrationEditorMobile } from '../assets';

const DesignedFuture = () => {
  return (
    <section className={`sectionContainer relative  `}>
      <h1 className=' font-normal text-center text-[2rem] text-VeryDarkBlue lg:text-[2.5rem]'>
        Designed for the future
      </h1>
      <article className='md:flex  flex-row-reverse justify-center align-middle container  '>
        {
          //'/******************* IMAGE ILLUSTRATION ***********************/'
        }
        <div>
          <img src={illustrationEditorMobile} className='lg:hidden mt-[3rem]' />
          <img
            src={illustrationEditorDesktop}
            className='sm: hidden lg:block absolute top-[20%] left-[55%] z-10'
          />
        </div>
        <div className='sm: text-center text-VeryDarkGrayishBlue md:text-left mt-[5rem]'>
          <div className='mt-[3rem]'>
            <h1 className='font-normal text-3xl sm: text-VeryDarkBlue'>
              Introducing an extensible editor
            </h1>
            <p className='mt-2 text-[1.15rem] md:w-[45%]'>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className='mt-[3rem]'>
            <h1 className='font-normal text-3xl  text-VeryDarkBlue'>
              Robust content management
            </h1>
            <p className='mt-2  text-[1.15rem] md:w-[45%] '>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DesignedFuture;
