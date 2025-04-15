import React, { useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import "./CSS/Header.css"
const Header = () => {

    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/?search-${query}`)
    }


    return (
        <header className="header">
            <h1 className="logo">Blinkit</h1>
            <h3 className="theme-logo"> Delivered in 8 minutes</h3>

            <form onSubmit={handleSearch} 
            className="search-form" >
                <input
                    type="text"
                    placeholder="Search Products..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    
                />
            </form>
            <nav className="nav-links">
                <Link to="/" >Home</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    )
}

export default Header;