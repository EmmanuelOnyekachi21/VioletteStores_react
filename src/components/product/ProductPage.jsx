import React, { useEffect, useState } from 'react'
import RelatedProducts from './RelatedProducts'
import { api, BASEURL } from '../../api'
import { useParams } from 'react-router-dom'
import ProductPagePlaceHolder from './ProductPagePlaceholder'
import generatorfxn from '../random'
import { toast } from 'react-toastify'


const ProductPage = ({setItemNumber}) => {
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inCart, setInCart] = useState(false)

    useEffect(function() {
        if (!localStorage.getItem('cart_code')){
            const result = generatorfxn()
            localStorage.setItem('cart_code', result)
          }
    })

    useEffect(function (){
        setLoading(true)
        api.get(`product/${slug}`)
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
            setProducts(res.data.related_products)
            setLoading(false)
        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
            // setError("Failed to fetch product details.")
        })
    }, [slug])
    
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

    useEffect(function(){
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

    if (loading) {
        return (<ProductPagePlaceHolder/>)
    }

    // if (error){
    //     return <Error error={error} />
    // }

    return (
        <div>
            <section className="pt-5 pb-3">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img
                                className="card-img-top mb-5 mb-md-0"
                                src={`${BASEURL}${product.image}`}
                                alt="your product"
                                style={{maxHeight: '500px'}}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1">{product.category?.name}</div>
                            <h1 className="display-5 fw-bolder">{product.name}</h1>
                            <div className="fs-5 mb-5">
                                <span>{`$${product.price}`}</span>
                            </div>
                            <p className="lead">
                                {product.description}
                            </p>
                            <div className="d-flex">

                                <button
                                    className="btn btn-outline-dark flex-shrink-0"
                                    type="button"
                                    onClick={add_item}
                                    disabled={inCart}
                                >
                                    <i className="bi-cart-fill me-1"></i>
                                    {inCart ? 'Product Added Successfully': 'Add to cart'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProducts products={products} />
        </div>
    )
}

export default ProductPage