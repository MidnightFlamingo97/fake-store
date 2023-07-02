import React, { useEffect, useState } from 'react'
import './Homepage.css'
import ProductCard from '../../Components/ProductCard/ProductCard';

function Homepage() {

  //on first load API call for products and store in all product state
  const [allProduct, setAllProducts] = useState([]);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(res=>res.json())
    .then(json=> {
      setAllProducts(json);
      setProductList(json);
      //placeholder loading screen on firsts load. Once API call finished switch to page content
      document.querySelector('.products-container').style.display = 'grid';
      document.querySelector('.loading-screen').style.display = 'none';
    })
    .catch(err => console.log(err))
  },[])



  ////on first load API call for product categories and store in categoryBtns state with additional 'All' value
  const [categroyBtns, setCategoryBtns] = useState([]);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(res=>res.json())
    .then(json=>{setCategoryBtns(['All'].concat(json).map(word => word.replace(/(^|\s)\S/g, match => match.toUpperCase())))});
  },[]);



  //set state for which filter user has selected
  const [filterQuery, setFilterQuery] = useState('all');



  //make state for the filtered results of the product and update each time user changes the filter
  const [productList, setProductList] = useState([]);

  useEffect(()=>{
    filterQuery.toLowerCase() === 'all'?
    setProductList(allProduct)
    :
    setProductList(allProduct.filter(item => item.category.toLowerCase() === filterQuery.toLowerCase()))
  },[filterQuery])



  //render filter buttons from categroyBtns state and render product card components based on product list state
  return (
    <main>
      <div className='category-container'>{categroyBtns.map((item, index) => (
          <h3 key={index} className='category-btn w400 clickable' onClick={()=>{setFilterQuery(item.toLowerCase())}}>{item}</h3>
      ))}</div>
      <div className='products-container'>{productList.map(item => (
        <ProductCard product={item} key={item?.id}/>
      ))}</div>

      {/* placeholder loading screen while fetching data */}
      <div className='loading-screen'>
        <h2 className='w700 loading'>Loading</h2>
        <div className="lds-dual-ring"></div>
      </div>
    </main>
  )
}

export default Homepage