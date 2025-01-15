import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Message"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            <strong>Address:</strong> 1234 Street Name, City, State, 12345
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@yourcompany.com" className="text-blue-500">
              jaswant.raj45@gmail.com
            </a>
          </p>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
