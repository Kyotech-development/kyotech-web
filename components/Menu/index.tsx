import React, { useState } from 'react';

export default function Menu(){
    const [displayNavBar, setDisplayNavBar] = useState<String>('hidden');

    const toggleNavbar = () => {
        let newDisplay = displayNavBar == 'hidden' ? 'block' : 'hidden';
        setDisplayNavBar(newDisplay);
    }

    return (
        <>
            <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center mb-10">
                        <img src="/assets/kyo-logo.png" className="h-24" alt="Kyotech Logo" />
                    </a>
                    <div className="flex md:order-2">
                        <button onClick={toggleNavbar} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <span className="ml-2">Menu</span>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${displayNavBar} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 rounded md:bg-transparent" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 pl-3 pr-4 rounded md:bg-transparent">A Empresa</a>
                            </li>
                            <li>
                                <a href="/services" className="block py-2 pl-3 pr-4  rounded md:bg-transparent">Serviços</a>
                            </li>
                            <li>
                                <a href="/products" className="block py-2 pl-3 pr-4 rounded md:bg-transparent">Produtos</a>
                            </li>
                            <li>
                                <a href="/partners" className="block py-2 pl-3 pr-4  rounded md:bg-transparent">Parceiros</a>
                            </li>
                            <li>
                                <a href="/news" className="block py-2 pl-3 pr-4 rounded md:bg-transparent">Notícias</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 pl-3 pr-4 rounded md:bg-transparent">Fale Conosco</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}