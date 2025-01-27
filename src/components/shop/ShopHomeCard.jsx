import React from 'react'

import { BASEURL } from '../../api';
import "./shopHomeCard.css";

const ShopHomeCard = ({product}) => {
    return (
        <div className="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">
            
                <div className="card card-container" style={{width: '100%', borderRadius: '2rem'}}>
                    <img
                        src={`${BASEURL}${product.image}`}
                        className="card-img-top"
                        alt="Product 1"
                        style={{
                            width: '100%', height: '100%', alignSelf: 'center', borderRadius: '2%'
                        }}
                    
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text text-muted">
                            {product.description}
                        </p>
                        <p className="card-text"><b>${product.price}</b></p>
                        <a href={`product/${product.slug}`} className="btn btn-primary d-grid">
                            View Product
                        </a>
                    </div>
                </div>
            
        </div>
    )
}

export default ShopHomeCard