import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header";
import DashboardPage from "./containers/DashboardPage";
import TertScrollBar from './containers/TertScrollBar';

function Greeting() {
    return (
        <h1>Hello world!</h1>
    )
}

ReactDOM.render(<TertScrollBar /> , document.getElementById('root'));

