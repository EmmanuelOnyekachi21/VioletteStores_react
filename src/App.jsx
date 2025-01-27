import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './components/home/HomePage';
import NotFoundPage from './components/ui/NotFoundPage';
import ProductPage from './components/product/ProductPage';
import { api } from './api';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import LoginPage from './components/user/LoginPage';
import ProtectedRoute from './components/ui/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import UserProfilePage from './components/user/UserProfilePage';
import SignUpPage from './components/user/SignUpPage';
import PaymentStatusPage from './components/payments/PaymentStatusPage';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import ContactUs from './components/contact/ContactUs';

// import '@fontsource/poppins';


const App = () => {
  const [itemNumber, setItemNumber] = useState(0);
  const cart_code = localStorage.getItem('cart_code')

  useEffect(function () {
    if (cart_code) {
      api.get(`get_cart_stat?cart_code=${cart_code}`)
        .then(res => {
          console.log(res.data)
          setItemNumber(res.data.number_of_items)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }, [])

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout number_of_item={itemNumber} />}>
            <Route index element={<HomePage />} />
            <Route path='shop' element={<Shop setItemNumber={setItemNumber}/>} />
            <Route path='product/:slug' element={<ProductPage setItemNumber={setItemNumber} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='product/:category_slug' element={<Shop />} />
            <Route path='cart' element={<CartPage setItemNumber={setItemNumber} />} />
            <Route path='checkout' element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<UserProfilePage/>} />
            <Route path='/register' element={<SignUpPage />} />
            <Route path='/payment-status' element={<PaymentStatusPage setItemNumber={setItemNumber} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App