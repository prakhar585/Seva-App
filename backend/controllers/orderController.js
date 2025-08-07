let orderCounter = 100;
let paymentCounter = 9000;

const placeOrder = (req, res) => {
  const { items, address } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Invalid or missing items array" });
  }

  if (!address || !address.pincode || !address.city || !address.state) {
    return res.status(400).json({ message: "Invalid or missing address" });
  }

  // Calculate total discounted price
  const amountToPay = items.reduce((total, item) => {
    return total + Number(item.discountedPrice || 0);
  }, 0);

  const orderId = ++orderCounter;
  const paymentId = ++paymentCounter;

  res.status(201).json({
    orderId,
    paymentId,
    amountToPay
  });
};

module.exports = { placeOrder };
