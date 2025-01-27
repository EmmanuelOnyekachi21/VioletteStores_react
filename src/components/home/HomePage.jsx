import React, { useEffect, useState } from 'react'
import CarouselComponent from './CarouselComponent'
import Truth from './Truth'
import FeaturedCategories from './FeaturedCategories'
// import HomeCard from './HomeCard'
import CardContainer from './CardContainer'
import { api } from '../../api'
import PlaceHolderContainer from '../ui/PlaceHolderContainer'
import Error from '../ui/Error'
import ProductPlaceHolderContainer from '../ui/ProductPlaceHolderContainer'

const HeroSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true)
    api.get('products')
    .then(res => {
      setProducts(res.data);
      setLoading(false)
    })
    .catch(err=> {
      console.log(err.message)
      setLoading(false)
      setError(err.message)
    });

    api.get('categories')
    .then(res => {
      setCategories(res.data);
      console.log(res.data)
      setLoading(false)
    })
    .catch(err=> {
      console.log(err.message)
      setLoading(false)
      setError(err.message)
    });
  }, [])
  return (
    <>
      <CarouselComponent/>
      <Truth/>
      {error && <Error error={error}/>}
      {loading && <PlaceHolderContainer/> && <ProductPlaceHolderContainer/>}
      {loading || error !=="" || <FeaturedCategories categories={categories}/>}
      {loading || error !== "" || <CardContainer products={products}/>}
    </>
  )
}

export default HeroSection