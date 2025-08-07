import { useEffect, useState } from "react";
import axios from "axios";
import SevaCard from "../components/SevaCard";
import { useCart } from "../context/CartContext";

export default function HomePage() {
  const [sevas, setSevas] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
 axios.get(`${process.env.REACT_APP_API_BASE}/sevas`)
      .then(res =>{
         setSevas(res.data)
        console.log(sevas);
        })
      .catch(err => console.error("Error fetching sevas:", err));
  }, [sevas]);

  const handleAddToCart = (seva) => {
    console.log("🛒 Add to cart:", seva);
    // TODO: Add Redux/Context handling later
    addToCart(seva)
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Sevas</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {sevas.map(seva => (
          <SevaCard key={seva.id} seva={seva} onAdd={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
