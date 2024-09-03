import React from "react";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
          Contact Us
        </h1>
        <form className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            >
              <option value="" disabled selected>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="dob" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
