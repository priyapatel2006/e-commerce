"use client"
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ShoppingCart from './components/ShoppingCart';
import axios from 'axios';
import ProductDetails from './components/ProductDetails';

export default function Home() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(null)

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response)
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])


  const handleCartClick = (product) => {
    setCart([...cart, product])
  }
  const handleCartClear = () => {
    setCart([])
  }

  return (
    <div className="bg-gray-950  min-h-screen">
      <Header setShowCart={setShowCart} navItems={["Women", "Men", "Sports", "New Releases"]} cart={cart} />
      {selected && <ProductDetails handleSelect={(id) => setSelected(id)} id={selected} />}
      {!selected && <h1 className="text-center  pt-24 text-white text-2xl font-bold">New Arrivals</h1>}
      {!selected && <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 pb-20">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              handleCartClick={() => handleCartClick(product)}
              handleSelect={(id) => setSelected(id)}
            />
          ))}
        </div>
      </div>}

      {showCart && <ShoppingCart handleCartClear={handleCartClear} setShowCart={setShowCart} cart={cart} />}
    </div>
  );
}
