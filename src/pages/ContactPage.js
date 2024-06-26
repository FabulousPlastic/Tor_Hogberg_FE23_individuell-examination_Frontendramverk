import React, { useState } from 'react';
import './ContactPage.css';
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setMessageSent(false); 
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.message) tempErrors.message = "Message is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      console.log(formData);
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(tempErrors);
      setMessageSent(false);
    }
  };

  return (
    <div>     
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Namn"
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Meddelande"
        />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Skicka</button>
      </form>
      {messageSent && <p>Message sent successfully!</p>}
    </div>
  );
};

export default ContactPage;