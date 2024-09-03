import React from "react";

const AddressPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">My House Address</h1>
        <figure className="md:flex bg-blue-100 dark:bg-blue-800 rounded-xl p-6 md:p-12 lg:p-16 shadow-lg">
          <div className="flex justify-center items-center mb-6 md:mb-0">
            <img
              className="w-78 h-72 md:w-94 md:h-90 lg:w-94 lg:h-90 rounded-lg"
              src="/address.jpg" // Replace with the path to your house image
              alt="Image of the house"
            />
          </div>
          <div className="pt-6 md:pt-0 md:pl-6 text-center md:text-left space-y-4">
            <address className="text-lg font-medium text-gray-800 dark:text-gray-200">
              <p className="mb-4">
                <strong>Address:</strong>
                <br />
                AL Noor Canal View
                <br />
                House No 2, RYK 64200
                <br />
                Pakistan
              </p>
              <p className="mb-4">
                <strong>Phone:</strong>
                <br />
                +92 (308) 000-9648
              </p>
              <p className="mb-4">
                <strong>Email:</strong>
                <br />
                chrayyan512@gmail.com
              </p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                “Feel free to reach out if you have any questions or need more information. We're always happy to help!”
              </p>
            </address>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default AddressPage;
