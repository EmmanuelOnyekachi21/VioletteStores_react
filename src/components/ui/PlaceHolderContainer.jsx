import React from 'react'
import CategoryPlaceHolder from './CategoryPlaceHolder'

const PlaceHolderContainer = () => {
  return (
    <section className="py-5 bg-light">
        <h1 className="poppins-bold text-center mb-5">FEATURED CATEGORIES</h1>
        <>
            <CategoryPlaceHolder/>
        </>
    </section>
  )
}

export default PlaceHolderContainer