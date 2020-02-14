import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header";
import DashboardPage from "./containers/DashboardPage";
import TertScrollBar from './containers/TertScrollBar';
import DragWithScrollBar from './containers/DashboardPage/DragWithScrollBar';

function Greeting() {
    return (
        <h1>Hello world!</h1>
    )
}

ReactDOM.render(<DashboardPage /> , document.getElementById('root'));
