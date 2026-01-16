'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'



function ProductDetails({ id, handleSelect }) {
    const router = useRouter()
    // const params = useSearchParams()
    // console.log(params.get("id"))
    const [product, setProduct] = useState(null)
    const stars = [1, 2, 3, 4, 5]
    const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]

    const getProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/' + id)
        // const response = await axios.get('https://fakestoreapi.com/products/' + params.get("id"))
        setProduct(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (!product) return <p className="text-center mt-20">Loading...</p>

    return (
        <div className="p-20 min-h-screen">
            <div className="bg-gray-950 rounded-lg text-white flex flex-col md:flex-row items-center md:items-start p-6">
                <div className="w-[400px] h-[450px] justify-center items-center flex p-5 bg-white">
                    <img
                        src={product.image}
                        className=" rounded-lg"
                    />
                </div>

                <div className="mt-6 bg-gray-950 md:mt-0 md:pl-8 w-full">

                    <div className="flex justify-between "  >
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <button
                            className="text-2xl font-bold cursor-pointer hover:text-indigo-400"
                            onClick={() => handleSelect(null)}
                        >
                            X
                        </button>
                    </div>
                    <p className="text-lg font-semibold mt-2">₹{product.price}</p>

                    <div className="flex mt-3 gap-3 items-center">
                        {stars.map((_, i) => (
                            <img
                                key={i}
                                src="https://static.vecteezy.com/system/resources/previews/023/096/970/non_2x/stars-customer-product-rating-review-flat-icon-for-apps-and-websites-free-vector.jpg"
                                className="h-6 w-6"
                            />
                        ))}
                        <p className="text-sm text-indigo-400 font-semibold">Reviews</p>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <div className="h-10 w-10 rounded-full bg-white border-2 border-gray-400 hover:border-gray-700 cursor-pointer"></div>
                        <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-gray-400 hover:border-gray-700 cursor-pointer"></div>
                        <div className="h-10 w-10 rounded-full bg-slate-900 cursor-pointer"></div>
                    </div>

                    <h2 className="mt-6 font-semibold">Size guide</h2>

                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                className="bg-white py-2 text-sm md:text-lg font-bold text-black rounded-md hover:bg-gray-200"
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    <button className="py-3 w-full mt-6 rounded-lg font-bold text-lg bg-indigo-500 hover:bg-indigo-600">
                        Add to bag
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
