import React from "react";
import './index.css';

class Header extends React.Component{
    render() {
        return (
            <ul>
                <li className="logo"><a ><img className="test0" src={require('../../images/Bitmap.png')} alt="ces-logo" /></a></li>
                <li><a >Dashboard</a></li>
                <li><a >Projects</a></li>
                <li><a >Resources</a></li>
                <li className="user"><a className="active" ><img className="test1" src="Oval.png"/></a> </li>
            </ul>
        )
    }
}
export default Header;
