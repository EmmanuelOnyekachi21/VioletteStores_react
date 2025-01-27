import { useState } from "react";
import styles from "./PaymentSection.module.css"
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa"
import { Link } from "react-router-dom";
import { api } from "../../api";

const PaymentSection = () => {
  const cart_code = localStorage.getItem('cart_code')
  const [loading, setLoading] = useState(false)

  function makePayments() {
    setLoading(true)
    api.post('initiate_payment/', {cart_code})
    .then(res => {
      setLoading(false);
      console.log(res.data);
      window.location.href = res.data.data.link;
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)
    })
  }
  return (
    <div className="col-md-4">
      <div className={`card ${styles.card}`}>
        <div className="card-header text-bg-dark">
          <h5>Payment Options</h5>
        </div>
        <div className="card-body">
          {/* PayPal Button */}
          <button className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} id="paypal-button">
            <FaCcPaypal style={{ fontSize: "30px" }} /> Pay with PayPal
          </button>

          {/* Flutterwave Button */}
            <button onClick={makePayments} disabled={loading} className={`btn btn-secondary w-100`} id="flutterwave-button">
              <BsFillCreditCard2FrontFill style={{ fontSize: "30px" }} /> Pay with Flutterwave
            </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSection
