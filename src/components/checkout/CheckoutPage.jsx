import React from 'react'
import OrderSummary from './OrderSummary'
import PaymentSection from './PaymentSection'
import useCartData from '../hooks/useCartData';

const CheckoutPage = () => {
    const [cartitems, setCartItems, carttotal, setCarttotal, loading] = useCartData();
  return (
    <section style={{ paddingTop: '80px', height: '90vh' }}>
        <div className="container my-5">
            <div className="row">
                <OrderSummary cartitems={cartitems} carttotal={carttotal} />
                <PaymentSection />
            </div>
        </div>
    </section>
  )
}

export default CheckoutPage