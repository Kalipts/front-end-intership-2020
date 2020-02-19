import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import DashboardPage from './containers/DashboardPage';

function Greeting() {
  const abc = new Array(200000).fill(1);
  const abcRender = abc.map((item,index)=>(<div key={index}>{item}</div>))
  return <h1>{abcRender}</h1>;
}

ReactDOM.render(<DashboardPage />, document.getElementById('root'));
