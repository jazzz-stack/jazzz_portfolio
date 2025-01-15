import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-lg text-gray-700">
          Discover our latest projects and see how we have helped our clients
          achieve their goals.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Project+1"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Project 1</h2>
            <p className="text-gray-700 mb-4">
              A brief description of Project 1. Highlighting the key features
              and achievements.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Project+2"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Project 2</h2>
            <p className="text-gray-700 mb-4">
              A brief description of Project 2. Highlighting the key features
              and achievements.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Project+3"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Project 3</h2>
            <p className="text-gray-700 mb-4">
              A brief description of Project 3. Highlighting the key features
              and achievements.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Project+4"
            alt="Project 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Project 4</h2>
            <p className="text-gray-700 mb-4">
              A brief description of Project 4. Highlighting the key features
              and achievements.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Project+5"
            alt="Project 5"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Project 5</h2>
            <p className="text-gray-700 mb-4">
              A brief description of Project 5. Highlighting the key features
              and achievements.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Project+6"
            alt="Project 6"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Project 6</h2>
            <p className="text-gray-700 mb-4">
              A brief description of Project 6. Highlighting the key features
              and achievements.
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
    </div>
  );
};

export default Home;
