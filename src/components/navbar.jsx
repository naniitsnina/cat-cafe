import { Link } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react' 
import "./navbar.css"
import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <div className="links">
                    <Link to='/'> Shop </Link>
                    <Link to='cart'> 
                        <ShoppingCartSimple className= 'shoppingCart' size={32}/> 
                    </Link>
                </div>
            </div>
        </div>
    )
}