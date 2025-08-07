import { useCart } from "../context/CartContext";

export default function SevaCard({ seva }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  console.log(seva);
  const inCart = cartItems.find((item) => item.id === seva.id);
  const quantity = inCart?.quantity || 0;

  return (
    <div style={styles.card}>
      <h3>{seva.name}</h3>
      <p>{seva.description}</p>
      <p><strong>Price:</strong> ₹{seva.marketPrice}</p>

      {quantity === 0 ? (
        <button onClick={() => addToCart(seva)}>Add to Cart</button>
      ) : (
        <div style={styles.cartControls}>
          <button onClick={() => removeFromCart(seva.id)}>-</button>
          <span style={styles.qty}>{quantity}</span>
          <button onClick={() => addToCart(seva)}>+</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  cartControls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "0.5rem"
  },
  qty: {
    fontWeight: "bold"
  }
};
