// backend/data/sevas.js

const sevas = [
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
    media: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    code: "seva002",
    title: "Evening Bhajan",
    tags: ["music", "spiritual"],
    description: "Melodious bhajans every evening",
    marketPrice: 1200,
    discountedPrice: 900,
    start: "2025-08-05",
    end: "2025-09-05",
    amountRaised: 4000,
    targetAmount: 8000,
    media: "https://via.placeholder.com/150"
  }
];

module.exports = sevas;
