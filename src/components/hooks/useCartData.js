import { useEffect, useState } from 'react'
import { api } from '../../api'

function useCartData() {
  const cart_code = localStorage.getItem('cart_code');
  const [cartitems, setCartItems] = useState([])
  const [carttotal, setCarttotal] = useState(0.00)
  const [loading, setLoading]= useState(false)

  useEffect(function () {
    setLoading(true)
    api.get(`get_cart?cart_code=${cart_code}`)
      .then(res => {
        setLoading(false)
        console.log(res.data)
        setCartItems(res.data.items)
        setCarttotal(res.data.sum_total)
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
      });
  }, []);

  return [cartitems, setCartItems, carttotal, setCarttotal, loading]
}

export default useCartData