import React from 'react';

const AboutUs = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vastra by Rashi</h1>
       <div className='flex justify-center'>
       <img className=' size-100 ' src="/logo.png" />
       </div>
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
        Vastra by Rashi is a home-grown fashion brand built on passion and purpose. We specialize in affordable, stylish ethnic wear for women — and now, we’re expanding into men’s fashion too.
        </p>
        <p className="text-md text-gray-600 max-w-xl mx-auto">
        Introducing Trackpor9, our dedicated line of premium men’s trackpants — designed for comfort, performance, and everyday style.
        </p>
        <p className="text-md text-gray-600 max-w-xl mx-auto">Our journey began with a simple dream: to make quality, fashionable clothing accessible to all. Whether it’s the grace of ethnic wear or the edge of modern athleisure, every piece we offer is thoughtfully curated with love and care — straight from our home to yours.</p>
      </section>
    </>
  );
};

export default AboutUs;