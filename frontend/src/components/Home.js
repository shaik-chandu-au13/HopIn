import React, { useEffect } from 'react'

import MetaData from './layouts/MetaData'

import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'

import Product from './product/Product'
const Home = () => {
  const dispatch = useDispatch();

  // const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)
  const { loading, products, error, productsCount } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])

  return (
        <div className="container container-fluid">
<MetaData title={'Buy Best Products Online'} />
<h1 id="products_heading">Latest Products</h1>

<section id="products" className="container mt-5">
  <div className="row">
    {products && products.map(product=>(

<Product key={product._id} product={product} col={3} />
  //   <div key={product._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
  //   <div className="card p-3 rounded">
  //     <img
  //       className="card-img-top mx-auto"
  //       src={product.images[0].url} alt="dummy product"
  //     />
  //     <div className="card-body d-flex flex-column">
  //       <h5 className="card-title">
  //         <a href="null">{product.name}</a>
  //       </h5>
  //       <div className="ratings mt-auto">
  //         <div className="rating-outer">
  //           <div className="rating-inner" style={{width:`${(product.ratings / 5)*100}%`}}></div>
  //         </div>
  //         <span id="no_of_reviews">(product.numOfReviews Reviews)</span>
  //       </div>
  //       <p className="card-text">${product.price}</p>
  //       <a href="null" id="view_btn" className="btn btn-block">View Details</a>
  //     </div>
  //   </div>
  // </div>

    ))}
    
   
  </div>
</section>
            
        </div>
    )
}

export default Home
