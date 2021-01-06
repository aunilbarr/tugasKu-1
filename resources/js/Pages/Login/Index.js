import React from 'react';
import Layout from '../../Shared/Layout'

function Login() {
    return (
    <Layout>
        <div className="p-4 border rounded max-w-lg flex flex-col items-center">
            <div className="flex flex-between items-start">
                <a href="/" className="text-sm font-semibold text-gray-700">
                    back to homepage
                </a>
            </div>
                <h1 className="text-4xl text-blue-700 font-bold mb-4">Login</h1>
            <input className="border rounded p-2 mb-4" type="email" placeholder="E-mail" name="" id="" />
            <input className="border rounded p-2" type="password" placeholder="Password" name="" id="" />
        </div>
    </Layout>
    );
}

export default Login;
