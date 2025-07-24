import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    productName: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, productName, quantity } = form;
    const fullName = `${firstName} ${lastName}`;
    const message = `Hi, I’m ${fullName}! 🙌 I just checked out your collection and absolutely loved it. I’d like to place an order for ${quantity} x ${productName}. I’d prefer to buy directly from you — could you please help me with the next steps? Looking forward to your reply! 💬`;

    const phone = '8792678598'; // Replace with your actual WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto  py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Get in Touch with Vastra by Rashi</h1>
      <p className="text-center text-lg mb-10">
        We’re here to help you find the perfect fit — whether it's ethnic elegance or everyday comfort wear.
      </p>

      {/* Contact Info */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">📞 Contact Details</h2>
        <ul className="space-y-2 text-base">
          <li>
            <strong>📱 Phone / WhatsApp:</strong>{' '}
            <a href="https://wa.me/8792678598" className="text-blue-600" target="_blank" rel="noreferrer">
              +91-87926 78598
            </a>
          </li>
          <li>
            <strong>📧 Email:</strong>{' '}
            <a href="mailto:raghottam.kalkeri@vastrabyrashi.com" className="text-blue-600">
              raghottam.kalkeri@vastrabyrashi.com
            </a>
          </li>
          <li>
            <strong>📸 Instagram:</strong>{' '}
            <a href="https://www.instagram.com/vastrabyrashi/" className="text-blue-600" target="_blank" rel="noreferrer">
              @vastrabyrashi
            </a>
          </li>
        </ul>
      </div>

      {/* Meesho CTA */}
      <div className="bg-yellow-50 border border-yellow-300 p-5 rounded-lg mb-10">
        <h3 className="text-xl font-semibold mb-2">🚚 Want Quick Delivery & Online Payment?</h3>
        <p className="text-base">
          Shop our products directly on Meesho for fast delivery, secure online payments, and the best prices — always!
        </p>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Shop on Meesho
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">💬 Send Us Your Query</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1 font-medium">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1 font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="productName" className="block mb-1 font-medium">
              Product Name
            </label>
            <input
              id="productName"
              name="productName"
              type="text"
              required
              value={form.productName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block mb-1 font-medium">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              required
              value={form.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-600 text-white  py-2 rounded hover:bg-green-700"
          >
            Submit & Contact on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;