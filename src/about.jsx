import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      {/* <section className="container mx-auto px-4 py-16 text-center">
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
      </section> */}


      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Empowering Everyday Fashion — For Him & Her</h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Vastra by Rashi is a home-grown fashion brand from Hubballi, born out of passion, purpose, and a deep love for timeless yet affordable style.

                  We launched with a dual vision — to bring elegance to women’s ethnic wear through beautifully crafted kurtis and kurta sets, and to redefine men’s comfort wear with our exclusive Trackpor9 line of premium track pants and shorts.
                </p><p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  From the grace of tradition to the edge of modern athleisure, every piece we offer is thoughtfully curated and affordably priced — making quality fashion accessible to all.
                </p><p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Operating as an online-only store, we’re proudly growing from Hubballi with a loyal community that values comfort, culture, and everyday style.




                </p>
              </div>
              <h1 className='font-bold'>📲 Shop & Connect with Us on Instagram</h1>
              <Link to="https://www.instagram.com/vastrabyrashi/">
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                </button>
              </Link>
            </div>
            <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="/logo.png" alt="about Us image" />
          </div>
        </div>
      </section>






    </>
  );
};

export default AboutUs;