import React from 'react'

const Truth = () => {
  return (
    <section className="py-5">
      <h1 className="text-center poppins-bold mb-5">OUR TRUTH</h1>
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
            <div className="d-flex align-items-center justify-content-center border p-4 gap-3">
              <i className="fa fa-check text-pink fs-1 poppins-bold" aria-hidden="true"></i>
              <h5 className="poppins-bold">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
            <div className="d-flex align-items-center justify-content-center border p-4 gap-3">
              <i className="fa fa-shipping-fast text-pink fs-1 poppins-bold" aria-hidden="true"></i>
              <h5 className="poppins-bold">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
            <div className="d-flex align-items-center justify-content-center border p-4 gap-3">
              <i className="fa fa-exchange-alt text-pink fs-1 poppins-bold" aria-hidden="true"></i>
              <h5 className="poppins-bold">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
            <div className="d-flex align-items-center justify-content-center border p-4 gap-3">
              <i className="fa fa-phone-volume text-pink fs-1 poppins-bold" aria-hidden="true"></i>
              <h5 className="poppins-bold">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Truth
