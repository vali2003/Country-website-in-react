import React from 'react';

export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    const formInputData = Object.fromEntries(formData.entries()); 
    console.log(formInputData); 
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
