import React from 'react';
import { Header, DesignedFuture, Footer, About, CTA } from './Components';
import './index.css';

const App = () => {
  return (
    <div className={`transition`}>
      <Header />
      <main className='overflow-hidden'>
        <DesignedFuture />
        <CTA />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default App;
