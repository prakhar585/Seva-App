import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.marketPrice * item.quantity, 0);
  console.log(`total is `,total);
  if (cartItems.length === 0) {
    return <h2 style={styles.empty}>Your cart is empty 🛒</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>🛒 Your Seva Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={styles.item}>
          <div>
            <h4>{item.description}</h4>
            <p>Price: ₹{item.marketPrice}</p>
          </div>

          <div style={styles.controls}>
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>

          <p style={styles.subtotal}>Subtotal: ₹{total}</p>
        </div>
      ))}

      <div style={styles.totalBox}>
        <h3>Total: ₹{total}</h3>
        <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "2rem",
  },
  item: {
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "1rem",
    marginBottom: "1rem",
  },
  controls: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    marginTop: "0.5rem"
  },
  subtotal: {
    fontWeight: "bold",
    marginTop: "0.5rem"
  },
  totalBox: {
    borderTop: "1px solid #ddd",
    marginTop: "2rem",
    paddingTop: "1rem",
    textAlign: "right",
  },
  empty: {
    textAlign: "center",
    marginTop: "3rem",
  },
};
