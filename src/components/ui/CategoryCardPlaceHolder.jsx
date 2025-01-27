import React from 'react'

const CategoryCardPlaceHolder = () => {
  return (
    <>
    <div className="card swiper-slide d-flex py-3 flex-column align-items-center">
            {/* <img src="..." className="card-img-top rounded-circle border border-dark" alt="..." style={{height: '300px', width: '300px'}}/> */}
             <div className="place-img" style={{width: '300px', height: '300px', backgroundColor: 'lightgray'}}></div>
            <div className="card-body" style={{width: '70%', margin: '2rem 0'}}>
              <h2 className="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h2>
              <p className="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
              </p>
              {/* <div className="d-grid"> */}
                <a className='btn btn-primary disabled placeholder col-7 bg-dark'></a>
              {/* </div> */}
            </div>
          </div>
    </>
  )
}

export default CategoryCardPlaceHolder