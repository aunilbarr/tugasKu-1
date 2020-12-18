import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import SearchBar from './SearchBar';
import DATA from "./data.js"
import CardWrapper from './CardWrapper';

function App() {
    return (
      <div className="App text-gray-800">
        <header className="w-full py-4 px-4 lg:px-8 flex items-center justify-between">
            <img src={logo} className="w-32" alt="logo" />
            <a className="underline text-blue-700" href="/admin">admin?</a>
        </header>
        <div className="w-full py-4 px-4 flex flex-col items-center">
            <h1 className="font-bold text-4xl leading-tight mb-2 text-center">Temukan tugasmu dengan Mudah.</h1>
            <p className="text-gray-700 text-sm text-center">
                kami para kontributor menyatukan semua tugas yang terpencar
                dari beberapa website Pembelajaran UIN Sunan Kalijaga.
            </p>
        </div>
        <div className="max-w-xl py-4 px-4 mx-auto">
            <SearchBar />
        </div>
        <div className="mx-auto max-w-xl px-4 lg:pt-4">
            <CardWrapper cards={DATA} />
        </div>
      </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

