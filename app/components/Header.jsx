function Header({ navItems, cart, setShowCart }) {

    return (
        <div className="w-full fixed top-0 z-100 bg-slate-900 border-b border-b-gray-600 text-white">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="flex gap-8 text-md font-medium">
                    {navItems.map((items, i) => (
                        < span key={i} className="cursor-pointer hover:text-gray-300"> {items}</span>
                    ))}
                </nav>
                <div className="flex items-center gap-4 text-md font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd"></path></svg>
                    <button>Sign in</button>
                    <div className="bg-white h-5  w-[0.5px]" ></div>
                    <button> Create account</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path></svg>
                    <div className="fixed  relative">
                        <img onClick={() => setShowCart(true)} className="h-8 w-8 cursor-pointer  rounded-full" src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" />
                        {/* <p className="text-gray-400 font-bold">{cart.length}</p> */}
                        {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-4 h-4 flex justify-center items-center rounded-full">
                            {cart.length}
                        </span>}
                    </div>

                    <div className="bg-white h-5 w-[0.5px]" ></div>
                    <h2 className="text-gray-400 font-bold">
                        ₹{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                    </h2>
                </div>
            </div>

        </div >
    )
}
export default Header;