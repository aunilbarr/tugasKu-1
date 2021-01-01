import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import logo from './logo.svg';

function Layout({children}) {
    return (
      <div className="App text-gray-800 min-h-screen flex flex-col justify-between items-center">
        {/* navbar */}
        <header className="w-full py-4 px-4 lg:px-8 flex items-center justify-between">
            <InertiaLink href="/">
                <img src={logo} className="w-32" alt="logo" />
            </InertiaLink>
            <InertiaLink href="/admin">
                <span className="underline text-blue-700">admin?</span>
            </InertiaLink>
        </header>
        {/* view goes here */}
        {children}
        {/* footer */}
        <footer className="w-full py-4 px-4 lg:px-8 flex items-center justify-center">
            <span className="text-sm text-gray-500">
                <span className="text-blue-700">&lt;&gt;</span> di Yogyakarta, dengan <span className="text-blue-700">&lt;3</span>
            </span>
        </footer>
      </div>
    );
}

export default Layout;

