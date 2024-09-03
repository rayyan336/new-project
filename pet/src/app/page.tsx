import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">About Us</h1>
        <figure className="md:flex bg-yellow-200 dark:bg-slate-800 rounded-xl p-6 md:p-12 lg:p-16 shadow-lg">
          <img
            className="w-64 h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full mx-auto"
            src="/rayyan.jpg.jpg"
            alt="Portrait of Reyyan Hassan"
          />
          <div className="pt-6 md:pt-0 md:pl-6 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                “My name is Reyyan. I recently completed my F.Sc and am joining the field of Generative AI. My teacher’s name is Sir Asif Langrah.”
              </p>
            </blockquote>
            <figcaption className="font-medium text-gray-800 dark:text-gray-200">
              <div className="text-sky-500 dark:text-sky-400">
                Reyyan Hassan
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Artificial Intelligence (Student)
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Page;
