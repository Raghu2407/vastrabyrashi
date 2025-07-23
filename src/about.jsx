import React from 'react';
// import NavigationBar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vastra by Rashi</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
          Vastra by Rashi is a home-based fashion brand delivering affordable, elegant ethnic wear for modern women. 
        </p>
        <p className="text-md text-gray-600 max-w-xl mx-auto">
          Our journey started with a passion for fashion and the dream of making quality clothing accessible to everyone. Each product is handpicked for comfort, style, and tradition — straight from our heart to your home.
        </p>
      </section>
    </>
  );
};

export default AboutUs;