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
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
  {/* Image section - shown first on mobile, second on desktop */}
  <div className="order-1 lg:order-2 w-full flex justify-center">
    <img
      className="rounded-3xl object-cover w-full max-w-md"
      src="/logo.png"
      alt="About Us"
    />
  </div>

  {/* Text section - shown second on mobile, first on desktop */}
  <div className="order-2 lg:order-1 w-full flex flex-col items-center lg:items-start gap-10">
    <div className="flex flex-col items-center lg:items-start gap-4 w-full">
      <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal text-center lg:text-start">
        Empowering Everyday Fashion — For Him & Her
      </h2>
      <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
        Vastra by Rashi is a home-grown fashion brand from Hubballi, born out of passion, purpose,
        and a deep love for timeless yet affordable style.
        <br /><br />
        We launched with a dual vision — to bring elegance to women’s ethnic wear through beautifully
        crafted kurtis and kurta sets, and to redefine men’s comfort wear with our exclusive
        Trackpor9 line of premium track pants and shorts.
      </p>
      <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
        From the grace of tradition to the edge of modern athleisure, every piece we offer is
        thoughtfully curated and affordably priced — making quality fashion accessible to all.
      </p>
      <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
        Operating as an online-only store, we’re proudly growing from Hubballi with a loyal
        community that values comfort, culture, and everyday style.
      </p>
    </div>

    <div className="flex flex-col items-center lg:items-start gap-4 w-full">
      <h1 className="font-bold text-lg">📲 Shop & Connect with Us on Instagram</h1>
      <Link to="https://www.instagram.com/vastrabyrashi/">
        <button className="sm:w-fit w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-md text-white text-sm font-medium">
          Get Started
        </button>
      </Link>
    </div>

    <div className="flex flex-col items-center lg:items-start gap-4 w-full">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca335] to-[#481310] text-4xl font-bold font-manrope leading-normal text-center lg:text-start">
        Why a Butterfly for Vastra by Rashi?
      </h1>
      <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
        A butterfly isn't just beautiful — it's transformation, diversity, and vibrancy in motion.
        Each wing showcases unique colors, just like how
        <span className="font-bold"> every person connects with a different fabric, color, or style.</span>
      </p>
      <h5 className="text-[#cca335] font-bold text-2xl text-center lg:text-start">
        For us, the butterfly stands for:
      </h5>
      <ul className="list-decimal pl-6 text-gray-600 text-base text-start space-y-1">
        <li><span className="font-bold">Colors that speak</span> — every shade reflects a mood, a moment, a memory.</li>
        <li><span className="font-bold">Personal style</span> — just like no two butterflies are the same, neither is anyone’s taste in clothing.</li>
        <li><span className="font-bold">Transformation</span> — from simple thread to expressive fashion, like a cocoon to wings.</li>
      </ul>
      <h1 className="text-2xl text-[#481310] font-bold text-center lg:text-start">
        This is Every Thread Speaks Your Story — just like every color on a butterfly tells its own.
      </h1>
    </div>
  </div>
</div>

      </section>






    </>
  );
};

export default AboutUs;