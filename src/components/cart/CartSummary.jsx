import {Link} from "react-router-dom"

const CartSummary = ({sum_total}) => {
  const subtotal = sum_total.toFixed(2)
  const tax = 4.00
  const total = (sum_total + tax).toFixed(2)
  return (
    <div className="col-md-4 align-self-start">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Cart Summary</h5>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Tax:</span>
          <span>${tax}</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span>Total:</span>
          <strong>${total}</strong>
        </div>
        <Link to="/checkout">
        <button
          className="btn w-100 text-bg-dark"
        >
          Proceed to Checkout
        </button>
        </Link>
        <Link to='/'>
          <button className="btn w-100 btn-primary mt-2">Continue shopping</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default CartSummary
