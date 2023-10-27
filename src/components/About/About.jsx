import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:w-full lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Providing Solutions to residential, corporate & educational instituions.
                      </h2>
                      <p className="mt-6 text-gray-600">
                      At <b>Gupta Eservices</b> , we're dedicated to revolutionizing your online experience. With a relentless passion for innovation, we've embarked on a mission to simplify and enhance your digital life. Our journey began with a commitment to deliver exceptional e-services that cater to your unique needs, exceeding your expectations at every turn. Our team of devoted professionals is at the heart of our success, working tirelessly to bring our vision to life. We believe in reliability and security as the cornerstones of your online journey, and we're here to provide solutions that you can trust. What sets us apart is our unwavering dedication to your satisfaction. Our customer support team is always ready to assist you, ensuring your digital experience is smooth and enjoyable. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      Join us at <b>Gupta Eservices</b> and discover why we're the preferred choice for those seeking the best e-services. Your online world deserves nothing less.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}