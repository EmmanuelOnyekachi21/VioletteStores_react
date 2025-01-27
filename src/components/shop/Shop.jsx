import React, { useEffect, useState } from 'react';
import ShopHomeCard from './ShopHomeCard';
import { api } from '../../api';
import { useParams } from 'react-router-dom';

const Shop = ({setItemNumber}) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { category_slug } = useParams();

  // Fetch categories on component mount
  useEffect(() => {
    api.get('categories/')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // Fetch products based on category or show all on initial load
  useEffect(() => {
    const endpoint = category_slug ? `products/${category_slug}` : 'products/';
    api.get(endpoint)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, [category_slug]);

  const handleCategoryClick = (categorySlug) => {
    const endpoint = categorySlug ? `products/${categorySlug}` : 'products/';
    api.get(endpoint)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error('Error fetching products:', err));
  };

  return (
    <div className="container-fluid" style={{ paddingTop: '100px' }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-4" style={{ position: 'sticky', top: '100px', height: 'calc(100vh - 100px)' }}>
          <div className="list-group">
            <button
              className="list-group-item list-group-item-action"
              onClick={() => handleCategoryClick(null)}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleCategoryClick(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="col-8">
          <h1 className="poppins-bold text-center my-3" style={{ textAlign: 'center' }}>FEATURED PRODUCTS</h1>
          <div className="row">
            {products.length > 0 ? (
              products.map(product => (
                <ShopHomeCard key={product.id} product={product} setItemNumber={setItemNumber} />
              ))
            ) : (
              <p className="text-center">No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
