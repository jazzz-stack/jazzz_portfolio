import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:jaswant.raj45@gmail.com?subject=${
      formData.name
    }&body=${encodeURIComponent(
      `${formData.message} \n\n\nName: ${formData.name} \nEmail: ${formData.email}`
    )}`;

    window.location.href = mailtoLink;
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Message"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={() => handleSendEmail()}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            <strong>Address:</strong> Barahpur Kaji, Basti, Uttar Pradesh,
            272130, India
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +91-8052004200
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:jaswant.raj45@gmail.com?subject=Reports"
              className="text-blue-500"
            >
              jaswant.raj45@gmail.com
            </a>
          </p>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/p/Jaswant-Raj-100012414181970/"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://x.com/jaswant_raj45"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/jaswant-raj"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jaizz3/?hl=en"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
