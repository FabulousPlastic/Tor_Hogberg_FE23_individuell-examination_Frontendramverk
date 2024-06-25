import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Namn" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Meddelande" />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}

export default ContactPage;