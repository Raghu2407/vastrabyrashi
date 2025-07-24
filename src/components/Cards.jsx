import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({ products: { id, name, image, short_desc, price } }) => {
  return (
    <div
      key={id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col"
    >
      <img
        className="w-full rounded-t-lg h-96 object-cover"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4 flex-1">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base ">
          {short_desc}
        </p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 ">
          ₹{price.toFixed(2)}
        </span>
        <Link to={`/product/${id}`}>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
