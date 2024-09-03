import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">My House</h1>
        <figure className="md:flex bg-green-100 dark:bg-green-800 rounded-xl p-6 md:p-12 lg:p-16 shadow-lg">
          <img
            className="w-74 h-100 md:w-100 md:h-100 lg:w-100 lg:h-100 rounded-lg mx-auto"
            src="/house.jpg" // Replace with the path to your house image
            alt="Image of the house"
          />
          <div className="pt-6 md:pt-0 md:pl-6 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                “Welcome to my house! It’s a Choudhary House place where comfort meets style. This house is where I create lasting memories with family and friends. It features a spacious living area, a modern kitchen, and a beautiful garden.”
              </p>
            </blockquote>
            <figcaption className="font-medium text-gray-800 dark:text-gray-200">
              <div className="text-green-500 dark:text-green-400">
                Choudhary Rayyan House
              </div>
              
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Page;
