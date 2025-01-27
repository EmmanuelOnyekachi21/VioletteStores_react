import React from 'react'
import styles from './OrderSummary.module.css'
import OrderItem from './OrderItem'

const OrderSummary = ({cartitems, carttotal}) => {
    const tax = 4.00
    const total = (carttotal + tax).toFixed(2);
    return (
        <div className="col-md-8">
            <div className={`mb-4 card ${styles.card}`}>
                <div className="card-header text-bg-dark">
                    <h5>Cart Summary</h5>
                </div>

                <div className="card-body">

                    <div className='px-3' style={{ height: "300px", overflow: "auto" }}>
                        {cartitems.map((cartitem) => <OrderItem key={cartitem.id} cartitem={cartitem} />)}
                    </div>


                    <hr />
                    <div className="d-flex justify-content-between">
                        <h6>Total</h6>
                        <h6><b>{`$${total}`}</b></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary