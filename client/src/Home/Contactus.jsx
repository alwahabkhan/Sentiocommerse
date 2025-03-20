import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to API)
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-24 lg:px-48">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">CONTACT US</h2>
        <p className="text-gray-600">
          If you have any questions or feedback, feel free to reach out to us. We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Feel free to contact us for any inquiries regarding SentioCommerce, our services, or your experience with our platform.
          </p>

          <div className="space-y-4">
            <ContactInfoItem icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 01-1-1v-6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1" text="123 Commerce St
City, State 12345" />
            <ContactInfoItem icon="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM7 8h10M7 12h10M7 16h10" text="(123) 456-7890" />
            <ContactInfoItem icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" text="info@sentio.com" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              name="email"
              placeholder="E-mail Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            <div className="mb-4 text-xs text-gray-600">
              By submitting this form, you agree to the processing of your personal data as described in the SentioCommerce Privacy Policy.
            </div>
            <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-500 text-white py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, text }) => (
  <div className="flex items-start">
    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1"> 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
    </div>
    <div className="mt-1">
      <p className="text-gray-700">{text}</p>
    </div>
  </div>
);

const Input = ({ name, placeholder, type = "text", value, onChange, error }) => (
  <div className="mb-4">
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
    />
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);

const TextArea = ({ name, placeholder, value, onChange, error }) => (
  <div className="mb-6">
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows="4"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
    ></textarea>
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);

export default ContactUs;