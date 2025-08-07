// backend/controllers/sevasController.js
const getAllSevas = (req, res) => {
  const dummySevas = [
    {
      id: 1,
      code: "seva001",
      title: "Morning Aarti",
      tags: ["puja", "temple"],
      description: "Daily morning aarti at 6AM",
      marketPrice: 1000,
      discountedPrice: 800,
      start: "2025-08-01",
      end: "2025-08-30",
      amountRaised: 5000,
      targetAmount: 10000,
      media: "https://example.com/image1.jpg"
    }
  ];

  res.json(dummySevas);
};

module.exports = { getAllSevas };
