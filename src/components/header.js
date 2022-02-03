import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <header className="header">
            <div className="homepage-link">
                <button>
                    &#9776;
                </button>
                <Link to={"/"}>
                    Ecommerce Website
                </Link>
            </div>
            <div className="header-links">
                <Link to={"/edit"}>
                     Edit current Item List
                </Link>
                <Link to={"/new"}>
                     Add a New Item
                </Link>
                <Link to={"/cart"}>
                    Cart
                </Link>
                <Link to={"/signin"}>
                    Sign In
                </Link>
            </div>
        </header>
        )
    }
}

export default Header