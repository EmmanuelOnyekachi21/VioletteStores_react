import React from 'react'
import { BASEURL } from '../../api'

const FeaturedCategoriesCard = ({category}) => {
  return (
    <>
    <div className="card swiper-slide d-flex py-3 flex-column align-items-center">
            <img src={`${BASEURL}${category.image}`} className="card-img-top rounded-circle" alt="..."/>
             {/* <div className="border border-dark rounded-circle" style={{width: '300px', height: '300px'}}></div> */}
            <div className="card-body">
              <h2 className="text-muted text-center">{category.name}</h2>
              <p className="card-text text-center">{category.description}</p>
              <div className="d-grid">
                <a href="#" className="btn text-bg-dark p-3 my-3">SHOP NOW</a>
              </div>
            </div>
          </div>
    </>
  )
}

export default FeaturedCategoriesCard