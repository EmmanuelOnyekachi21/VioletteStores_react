import React from 'react';
import styles from './Carousel.module.css'; // Import the module

const CarouselComponent = () => {
  return (
    <section className={styles.caro + " bg-light mb-3"}>
      <div className="container mt-3">
        <div
          id="carouselExampleIndicators"
          className={`carousel slide carousel-fade`}
          data-bs-ride="carousel"
          data-interval="3000"
          data-pause="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <a href="#">
              <div className="carousel-item active">
                <img src="src/assets/images/1.png" className="d-block w-100 img-fluid" alt="..." />
              </div>
            </a>
            <a href="#">
              <div className="carousel-item">
                <img src="src/assets/images/2.png" className="d-block w-100 img-fluid" alt="..." />
              </div>
            </a>
            <a href="#">
              <div className="carousel-item">
                <img src="src/assets/images/3.png" className="d-block w-100 img-fluid" alt="..." />
              </div>
            </a>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
