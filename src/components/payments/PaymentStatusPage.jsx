import {Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "../../api";

const PaymentStatusPage = ({setItemNumber}) => {
    const [statusMessage, setStatusMessage] = useState("Verifying your payment");
    const [substatusMessage, setSubstatusMessage] = useState('Wait a moment, your payment is being verified');

    const location = useLocation();

    useEffect(function(){
        const queryParams = new URLSearchParams(location.search);
        const status = queryParams.get('status');
        const tx_ref = queryParams.get('tx_ref');
        const transaction_id = queryParams.get('transaction_id');

        if (status && tx_ref && transaction_id) {
            api.post(`payment_callback/?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`)
            .then(res => {
                console.log(res.data)
                setStatusMessage(res.data.message)
                setSubstatusMessage(res.data.subMessage)
                localStorage.removeItem('cart_code');
                setItemNumber(0)
            })
            .catch(err => {
                console.log(err.message)
            })
        }
    }, [])
  return (
    <header className="container-fluid py-5 mb-5 text-bg-dark h_eight" style={{marginTop: '100px'}}>
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h2 className="display-4 fw-bold">{statusMessage}</h2>
            <p className="lead fw-normal text-white-75 mb-4">{substatusMessage}</p>
            <span>
            <Link to="/profile" className="btn btn-light btn-lg px-4 py-2 mx-3">View Order Details</Link>
            <Link to="/" className="btn btn-light btn-lg px-4 py-2">Continue Shopping</Link>
            </span>
        </div>
    </div>
</header>
  )
}

export default PaymentStatusPage
