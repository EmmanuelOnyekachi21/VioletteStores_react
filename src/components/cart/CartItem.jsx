import { useState } from "react"
import { api, BASEURL } from "../../api"
import { toast } from "react-toastify"


const CartItem = ({item, setCarttotal, cartitems, setCartItems, setItemNumber}) => {
  const [quantity, setQuantity] = useState(item.quantity)
  const [loading, setLoading] = useState(false)
  const itemData = {
    'quantity': quantity,
    'item_id': item.id
  }
  const data = {'item_id': item.id}

  function updateItem() {
    setLoading(true)
    api.patch('update/', itemData)
    .then(res=>{
      setLoading(false);
      toast.success("Quantity Updated");
      console.log(res.data);
      setCarttotal(cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem).reduce((acc, curr) => acc + curr.total, 0));
      setItemNumber(cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem).reduce((acc, curr) => acc + curr.quantity, 0));
    })
    .catch(err=> {
      setLoading(false)
      console.log(err.message)
    })
  }

  function delete_item() {
    const deleteMessage = window.confirm("Are you sure you want to remove this item?")
    // console.log(data.item_id);
    if (deleteMessage) {
      // console.log("Clicked Yes")
      api.post("delete_item/", data)
    .then(res => {
      // console.log("API SUCESS!!")
      toast.success('Item removed successfully!')
      setCartItems(cartitems.filter((cartitem) => cartitem.id != item.id))
      setCarttotal(cartitems.filter((cartitem) => cartitem.id != item.id).reduce((acc, curr) => acc + curr.total, 0))
      setItemNumber(cartitems.filter((cartitem) => cartitem.id != item.id).reduce((acc, curr) => acc + curr.quantity, 0))
      console.log(res.data)
    })
    .catch(err => console.log(err.message))
    }
  }
    return (
      <div className="col-md-12">
            {/* Cart Items */}
            <div
              className="cart-item d-flex align-items-center mb-3 p-3"
              style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}
            >
              <img
                src={`${BASEURL}${item.product.image}`}
                alt="Product Image"
                className="img-fluid"
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
              />
              <div className="ms-3 flex-grow-1">
                <h5 className="mb-1">{item.product.name}</h5>
                <p className="mb-0 text-muted">{`$${item.product.price}`}</p>
              </div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  min="1"
                  className="form-control me-3"
                 value={quantity}
                 onChange={
                  (e) => setQuantity(e.target.value)
                 }
                  style={{ width: '70px' }}
                />
                <button className="btn btn-sm mx-2" onClick={updateItem}
                 style={{backgroundColor: "#212529", color:"white"}} disabled={loading}>
                  {loading ? 'Updating' : 'Update'}
                  </button>
                <button className="btn btn-danger btn-sm" onClick={delete_item}>Remove</button>
              </div>
            </div>
  
            {/* Add more cart items here */}
          </div>
    )
  }
  
  export default CartItem
  