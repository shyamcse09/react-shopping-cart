import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import "./styles.css";

const Home = () => {
  const { 
    state: { products },
    filterState : { 
      byStock,
      byFastDelivery,
      byRating,
      searchQuery,
      sort
    }
  } = CartState();
  
  const transformProducts = () => {
    let sortedProducts = products;
    if(sort) {
      sortedProducts = sortedProducts.sort((a,b) => 
        sort === 'LowToHigh' ? a.price - b.price : b.price - a.price 
      ); 
    }
    if(!byStock) {
      sortedProducts = sortedProducts.filter(prod => prod.inStock)
    }
    if(byFastDelivery) {
      sortedProducts = sortedProducts.filter(prod => prod.fastDelivery)
    }
    if(byRating) {
      sortedProducts = sortedProducts.filter(prod => prod.ratings >= byRating)
    }
    if(searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => {
        return prod.name.toLowerCase().includes(searchQuery)
      })
    }
    return sortedProducts;
  }
  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {
          transformProducts().map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />
          })
        }
      </div>
    </div>
  )
}

export default Home