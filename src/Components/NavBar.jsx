import { Link } from "react-router-dom";

export const NavBar = ({ user }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/login">
        {user ? `Logged in as ${user.username}` : "Login"}
      </Link>
    </nav>
  );
};
