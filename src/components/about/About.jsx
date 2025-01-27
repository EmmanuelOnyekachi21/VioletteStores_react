import React from 'react';
import dog from "../../assets/images/dog.jpg"
const About = () => {
  return (
    <div className="container" style={{ paddingTop: '100px'}}>
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1 className="poppins-bold">About Us</h1>
          <p className="text-muted">Learn more about our mission, vision, and the people behind the platform.</p>
        </div>
      </div>

      <div className="row">
        {/* Mission Section */}
        <div className="col-md-6 mb-4">
          <h2 className="poppins-semibold">Our Mission</h2>
          <p>
            Our mission is to deliver the best shopping experience by connecting customers with high-quality products
            from trusted brands. We strive to make online shopping seamless, affordable, and enjoyable.
          </p>
        </div>

        {/* Vision Section */}
        <div className="col-md-6 mb-4">
          <h2 className="poppins-semibold">Our Vision</h2>
          <p>
            To become the most trusted e-commerce platform worldwide, fostering a vibrant community of buyers and sellers
            who share a passion for quality and innovation.
          </p>
        </div>
      </div>

      <div className="row">
        {/* Team Section */}
        <div className="col-12 mb-4">
          <h2 className="poppins-semibold text-center">Meet the Team</h2>
        </div>

        <div className="col-md-4 text-center">
          <img
            src={dog}
            alt="Team Member"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '100px' }}
          />
          <h5>John Doe</h5>
          <p className="text-muted">Founder & CEO</p>
        </div>

        <div className="col-md-4 text-center">
          <img
            src={dog}
            alt="Team Member"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '100px' }}
          />
          <h5>Jane Smith</h5>
          <p className="text-muted">Chief Marketing Officer</p>
        </div>

        <div className="col-md-4 text-center">
          <img
            src={dog}
            alt="Team Member"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '100px' }}
          />
          <h5>Sam Wilson</h5>
          <p className="text-muted">Head of Development</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center">
          <p className="text-muted">
            We're here to make shopping better for everyone. Feel free to <a href="/contact">contact us</a> with any
            questions or feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
