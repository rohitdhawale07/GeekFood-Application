// Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xl mb-4">Reach out to us for any inquiries or feedback:</p>
          <ul className="list-disc pl-4">
            <li>Email: contact@foodapp.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Food Street, Cityville</li>
          </ul>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
