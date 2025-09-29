import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate an API call or email service
    console.log(formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h1>
        <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl flex flex-row  md:flex-col overflow-hidden">

          {/* Left side: contact info */}
          <div className="bg-blue-600 text-white p-8 w-1/3 md:w-full flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <p className="mb-2 break-words">Email: 10891kharelaayush@gmail.com</p>
            <p className="mb-2">Phone: +977-9860678789</p>
            <p>Address: Chabahil-6 Kathmandu, Nepal</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/aayush-kharel-3b818523b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/AayushKK"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>

          {/* Right side: form */}
          <div className="p-8 flex-1 md:w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


