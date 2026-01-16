import Link from "next/link";

function ProductCard({ product, handleCartClick, handleSelect }) {
    return (
        <div>
            <div className="relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition group">

                <img
                    className="h-72 w-full object-contain bg-white p-3"
                    src={product.image}
                    alt="product"
                />

                <button
                    onClick={() => handleSelect(product.id)}
                    className="
            absolute inset-0 mt-20 flex items-center justify-center
           opacity-0 group-hover:opacity-100
            transition duration-300
          "
                >
                    {/* <Link href={"/quickview?id="+product.id}>    */}
                    <span className="bg-gray-200 border border-gray-700 text-gray-700 px-20 font-semibold py-1.5 rounded-md shadow-2xl">
                        Quick View
                    </span>
                    {/* </Link> */}
                </button>

                <button
                    onClick={handleCartClick}
                    className="
            absolute bottom-0 left-0 w-full
            bg-gray-400 text-white py-3 font-semibold
            translate-y-full group-hover:translate-y-0
            transition duration-500
          "
                >
                    Add to Cart
                </button>
            </div>

            <div className="flex justify-between mt-2">
                <div>
                    <p className="text-gray-600 font-bold">{product.title}</p>
                    <p className="text-gray-500 text-md">{product.color}</p>
                </div>
                <p className="text-gray-400 text-md">₹{product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
