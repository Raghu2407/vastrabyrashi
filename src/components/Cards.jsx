import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({ products: { id, name, image, price } }) => {
  return (

    <div>
      <Link to={`/product/${id}`}>
        <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
          <a class="relative flex h-60 overflow-hidden" href="#">
            <img class="absolute top-0 right-0 h-full w-full object-cover" src={image} alt={name} />
            <div class="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
              <div class="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
              <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
              <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
            </div>
            <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
              <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </a>
          <div class="mt-4 px-5 pb-5">
            <a href="#">
              <h5 class="text-xl tracking-tight text-slate-900 clamp-2-lines">{name}</h5>
            </a>
            <div class="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span class="text-3xl font-bold text-slate-900"> ₹{price}</span>
                {/* <span class="text-sm text-slate-900 line-through">$99</span> */}
              </p>
            </div>
            {/* <Link to={`/product/${id}`}>
              <button class="text-white mt-4 sm:mt-0 bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add to cart
              </button>
            </Link> */}
          </div>
        </div>
      </Link>
    </div >
  );
};

export default Cards;
