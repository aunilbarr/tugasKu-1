import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Homepage from './pages/Homepage'
import Login from './pages/Login'

function App() {
    return (
    <Router>
      <div className="App text-gray-800 min-h-screen flex flex-col justify-between items-center">
        {/* navbar */}
        <header className="w-full py-4 px-4 lg:px-8 flex items-center justify-between">
            <Link to="/">
                <img src={logo} className="w-32" alt="logo" />
            </Link>
            <Link to="/admin">
                <span className="underline text-blue-700">admin?</span>
            </Link>
        </header>
        {/* view goes here */}
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/admin">
                <Login />
            </Route>
        </Switch>
        {/* footer */}
        <footer className="w-full py-4 px-4 lg:px-8 flex items-center justify-center">
            <span className="text-sm text-gray-500">
                <span className="text-blue-700">&lt;&gt;</span> di Yogyakarta, dengan <span className="text-blue-700">&lt;3</span>
            </span>
        </footer>
      </div>
    </Router>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

