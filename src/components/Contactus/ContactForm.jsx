import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    // You can send the form data to an API endpoint or perform any other desired action
    // For simplicity, let's just log the form data to the console
    console.log({
      name,
      email,
      message
    });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-4">Have Questions? Feel free to reach out to us and let us know your request, ask questions, or share feedback.</p>
      <div className="my-8">
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="mr-2">Name:</label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="email" className="mr-2">Email:</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="border border-gray-300 rounded px-4 py-2"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div>
        <p>Benedict Olusola Amusan</p>
        <p>Email Address: benedictamusan@withires.com or info@withires.com</p>
        <p>Mobile No: +2348060444441</p>
        <p>WhatsApp: +18328028193</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/benedict-olusola-amusan-b0457838/" target="_blank" rel="noopener noreferrer">Benedict Olusola Amusan</a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
