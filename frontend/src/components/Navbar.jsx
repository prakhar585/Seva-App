import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f2f2f2" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}
