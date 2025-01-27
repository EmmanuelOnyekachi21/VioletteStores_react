import CartItem from './CartItem'
import CartSummary from './CartSummary'
import Spinner from '../ui/Spinner'
import useCartData from '../hooks/useCartData'

const CartPage = ({setItemNumber}) => {
  const [cartitems, setCartItems, carttotal, setCarttotal, loading] = useCartData();
  if (loading) {
    return <Spinner loading={loading} />
  }

  if (cartitems < 1) {
    return (
      <section style={{ paddingTop: '80px' }}>
        <div className="alert alert-primary my-3" role="alert" >
          You have no item in your cart yet!
        </div>
      </section>
    )
  }
  return (
    <section style={{paddingTop: '80px'}}>
      <div className="container mt-2 mb-4 pb-3" style={{ height: "75vh", overflow: 'scroll'}}>
      <h5 className="mb-4">Shopping Cart</h5>
      <div className="row">
        <div className="col-md-8 p-3">
          {cartitems.map(item => <CartItem key={item.id} item={item} setCartItems={setCartItems} setItemNumber={setItemNumber} setCarttotal={setCarttotal} cartitems={cartitems} />)}
          {/* <CartItem /> */}
        </div>

        <CartSummary sum_total={carttotal} />
      </div>
    </div>
    </section>
  )
}

export default CartPage