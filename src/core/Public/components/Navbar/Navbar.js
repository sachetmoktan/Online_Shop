import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-md bg-light navbar-light my-3 font-weight-bold" id="main-nav">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i>Shopping Cart  ({counter}) </Link></li>
                    </ul>
                </div>  
            </div>
        </nav>
        </>
    )
}

export default Navbar
