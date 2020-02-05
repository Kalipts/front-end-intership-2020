import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header";


function Greeting() {
    return (
        <h1>Hello world!</h1>
    )
}

ReactDOM.render(<Header /> , document.getElementById('root'));

