import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Data:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1 className="poppins-bold">Contact Us</h1>
          <p className="text-muted">Have questions or need help? Reach out to us!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="poppins-semibold">Get in Touch</h2>
          <p>We’d love to hear from you. Whether you have a question about our products, need assistance, or just want to provide feedback, our team is here to help.</p>
          <p>
            <b>Email:</b> support@yourshop.com <br />
            <b>Phone:</b> +1 (555) 123-4567
          </p>
          <p>
            <b>Address:</b> <br />
            123 E-Commerce Street, <br />
            Shop City, SC 98765
          </p>
        </div>

        <div className="col-md-6 mb-3">
          <h2 className="poppins-semibold">Send Us a Message</h2>
          {formSubmitted && <div className="alert alert-success">Thank you for contacting us! We’ll get back to you soon.</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark d-block w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
