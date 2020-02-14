import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header";
import DashboardPage from "./containers/DashboardPage";

function Greeting() {
    return (
        <h1>Hello world!</h1>
    )
}

ReactDOM.render(<DashboardPage /> , document.getElementById('root'));
