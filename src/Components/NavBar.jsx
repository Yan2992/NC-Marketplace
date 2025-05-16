import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/login">Login</Link>
        </nav>
    )
}

