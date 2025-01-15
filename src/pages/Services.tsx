import React from "react";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=Mobile+App+Development"
            alt="Mobile App Development"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Mobile App Development</h2>
            <p className="text-gray-700 mb-4">
              We create high-quality mobile applications for both Android and
              iOS platforms. Our team ensures seamless performance and user
              experience across all devices.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=Web+App+Development"
            alt="Web App Development"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Web App Development</h2>
            <p className="text-gray-700 mb-4">
              Our team develops responsive and scalable web applications
              tailored to your business needs. We use the latest technologies to
              ensure your web app is fast, secure, and reliable.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=App+Maintenance"
            alt="App Maintenance"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">App Maintenance</h2>
            <p className="text-gray-700 mb-4">
              We provide ongoing maintenance and support to ensure your
              applications remain up-to-date and perform optimally. Our services
              include bug fixes, updates, and performance enhancements.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=Marketing"
            alt="Marketing"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Marketing</h2>
            <p className="text-gray-700 mb-4">
              Our marketing team helps you reach a wider audience and increase
              engagement with your app. We offer services such as SEO, social
              media marketing, and content creation to boost your app's
              visibility and user base.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-600">
          Contact us at{" "}
          <a href="mailto:info@yourcompany.com" className="text-blue-500">
            info@yourcompany.com
          </a>{" "}
          for more information about our services.
        </p>
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Services;
