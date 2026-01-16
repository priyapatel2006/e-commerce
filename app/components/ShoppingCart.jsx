function ShoppingCart({ setShowCart, cart, handleCartClear }) {
    return (
        <div className="fixed z-10 right-0 top-[60px] w-[340px] h-[calc(100vh-57px)] bg-slate-900 text-white p-4 flex flex-col">

            <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                <h2 className="text-xl font-bold">Shopping Cart</h2>
                <button onClick={() => setShowCart(false)}>✖</button>
            </div>

            {cart.length === 0 && <img src="/images/empty_cart.webp" />}

            <div className="flex-1 overflow-y-auto mt-4 pr-2 no-scrollbar">
                {cart.map((c, i) => (
                    <div key={i} className="flex justify-between items-start border-b border-slate-700 pb-4 mb-4">
                        <div className="flex">
                            <img
                                src={c.image}
                                className="w-16 h-20 rounded border border-slate-600 object-cover"
                                alt="product"
                            />
                            <div className="ml-4 text-left">
                                <h3 className="font-semibold">{c.title}</h3>
                                <p className="text-slate-400 text-sm">{c.color}</p>
                                <p className="text-slate-400 text-sm">Qty 1</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="font-semibold">₹{c.price}</p>
                            <button className="text-indigo-400 text-sm mt-2">Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
                <>
                    <button onClick={handleCartClear} className="text-red-400 text-sm mt-2">
                        Clear Cart
                    </button>

                    <div className="flex justify-between mt-3 font-semibold">
                        <h1>Subtotal</h1>
                        <h2>
                            ₹{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                        </h2>
                    </div>

                    <p className="text-slate-400 text-sm mt-3">
                        Shipping and taxes calculated at checkout.
                    </p>

                    <button className="bg-gray-300 text-black py-2 w-full mt-3 rounded">
                        View Cart
                    </button>
                    <button className="bg-indigo-600 text-white py-2 w-full mt-3 rounded">
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
}

export default ShoppingCart;
