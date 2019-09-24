import React from 'react';
import { Link } from 'react-router-dom'
import CounterComponent from "./containers/counterContainer";

export class Navbar extends React.Component{
render(){
    return(
            <nav className="nav-wrapper">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/admin/books">Admin</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><CounterComponent/></li>
                    </ul>              
            </nav>
    )
}
}
