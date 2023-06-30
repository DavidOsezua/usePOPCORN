import React from 'react';
import '../index.css';
import { illustrationPhones, bgPatternCircles } from '../assets';

const CTA = () => {
  return (
    <section className='sectionContainer lg:pt-[24rem] bg-VeryDarkBlue'>
      <article>
        <div>
          <img src={illustrationPhones} />
          <img src={bgPatternCircles} />
        </div>
        <div>

        </div>
      </article>
    </section>
  );
};

export default CTA;
