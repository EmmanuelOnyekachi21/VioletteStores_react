import React, { useEffect, useState } from 'react'

import { api, BASEURL } from '../../api';
import "./shopHomeCard.css";
import { toast } from 'react-toastify';

const ShopHomeCard = ({ product, setItemNumber }) => {
    const [inCart, setInCart] = useState(false)

    const cart_code = localStorage.getItem('cart_code');


    const context = {
        'cart_code': cart_code,
        'product_id': product.id,
    }
    function add_item() {
        api.post('add_item/', context)
            .then(res => {
                console.log(res.data)
                setInCart(true)
                setItemNumber(curr => curr + 1)
                toast.success("Product added");
            })
            .catch(err => err.message)
    }

    useEffect(function () {
        if (product.id && cart_code) {

            api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
                .then(res => {
                    console.log(res.data)
                    setInCart(res.data.product_exists)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    }, [product.id, cart_code])
    return (
        <div className="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">

            <div className="card card-container" style={{ width: '100%', borderRadius: '2rem' }}>
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
                    <div>
                        <a href={`product/${product.slug}`} className="btn btn-primary d-grid">
                            View Product
                        </a>
                        <button
                            className="btn btn-outline-dark flex-shrink-0 w-100 mt-3"
                            type="button"
                            onClick={add_item}
                            disabled={inCart}
                        >

                            <i className="bi-cart-fill me-1"></i>
                            {inCart ? 'Product Added Successfully' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopHomeCard