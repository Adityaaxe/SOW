require("dotenv").config();
const sequelize = require('./db/config'); 
const Product = require("./models/pricelist");

const products = [
  {
    articleNo: "100001",
    product: "Premium Motor Oil for Heavy Vehicles",
    inPrice: 45000,
    price: 60000,
    unit: "liters",
    inStock: 1500,
    description: "High-performance motor oil suitable for trucks"
  },
  {
    articleNo: "100002",
    product: "Eco-Friendly Detergent - 5L Pack",
    inPrice: 250,
    price: 350,
    unit: "liters",
    inStock: 4200,
    description: "Biodegradable cleaning solution for households"
  },
  {
    articleNo: "100003",
    product: "Electric Screwdriver 20V Compact",
    inPrice: 2000,
    price: 2900,
    unit: "unit",
    inStock: 800,
    description: "Cordless screwdriver for light-duty work"
  },
  {
    articleNo: "100004",
    product: "Laptop Backpack 15.6” Water Resistant",
    inPrice: 700,
    price: 1100,
    unit: "unit",
    inStock: 1200,
    description: "Stylish backpack for laptops and accessories"
  },
  {
    articleNo: "100005",
    product: "Wireless Mouse Ergonomic Design",
    inPrice: 300,
    price: 500,
    unit: "unit",
    inStock: 2500,
    description: "Comfortable and reliable wireless mouse"
  },
  {
    articleNo: "100006",
    product: "Solar LED Light Outdoor Garden",
    inPrice: 1200,
    price: 1600,
    unit: "unit",
    inStock: 970,
    description: "Weatherproof solar light for outdoor use"
  },
  {
    articleNo: "100007",
    product: "Bluetooth Speaker Portable Bass",
    inPrice: 1800,
    price: 2500,
    unit: "unit",
    inStock: 610,
    description: "Compact speaker with strong bass output"
  },
  {
    articleNo: "100008",
    product: "Smartphone Stand Foldable Aluminum",
    inPrice: 400,
    price: 650,
    unit: "unit",
    inStock: 1400,
    description: "Adjustable mobile holder for desk use"
  },
  {
    articleNo: "100009",
    product: "Reusable Water Bottle Stainless Steel",
    inPrice: 280,
    price: 450,
    unit: "unit",
    inStock: 3100,
    description: "Leak-proof insulated water container"
  },
  {
    articleNo: "100010",
    product: "LED Bulb 12W Warm White",
    inPrice: 90,
    price: 140,
    unit: "unit",
    inStock: 8000,
    description: "Energy-saving LED bulb with warm light"
  },
  {
    articleNo: "100011",
    product: "Cotton T-Shirt Black L Size",
    inPrice: 300,
    price: 550,
    unit: "unit",
    inStock: 1700,
    description: "Soft cotton t-shirt with comfortable fit"
  },
  {
    articleNo: "100012",
    product: "Desk Organizer with Drawers",
    inPrice: 850,
    price: 1200,
    unit: "unit",
    inStock: 650,
    description: "Multi-compartment organizer for office"
  },
  {
    articleNo: "100013",
    product: "Notebook A5 - 200 Pages",
    inPrice: 75,
    price: 110,
    unit: "unit",
    inStock: 5000,
    description: "Compact ruled notebook for writing"
  },
  {
    articleNo: "100014",
    product: "Electric Kettle 1.8L Stainless Steel",
    inPrice: 1300,
    price: 1800,
    unit: "unit",
    inStock: 900,
    description: "Fast boiling electric kettle with safety"
  },
  {
    articleNo: "100015",
    product: "Power Bank 20000mAh Fast Charge",
    inPrice: 2000,
    price: 2800,
    unit: "unit",
    inStock: 400,
    description: "High capacity portable charger"
  },
  {
    articleNo: "100016",
    product: "Foldable Table Compact Design",
    inPrice: 1700,
    price: 2300,
    unit: "unit",
    inStock: 700,
    description: "Space-saving table ideal for home use"
  },
  {
    articleNo: "100017",
    product: "Air Purifier for Small Rooms",
    inPrice: 3200,
    price: 4500,
    unit: "unit",
    inStock: 350,
    description: "HEPA filter purifier for clean air"
  },
  {
    articleNo: "100018",
    product: "Bluetooth Headphones Over-Ear",
    inPrice: 2300,
    price: 3300,
    unit: "unit",
    inStock: 480,
    description: "Noise-isolating headset for music lovers"
  },
  {
    articleNo: "100019",
    product: "USB Flash Drive 64GB 3.0",
    inPrice: 600,
    price: 850,
    unit: "unit",
    inStock: 2100,
    description: "Fast transfer USB stick"
  },
  {
    articleNo: "100020",
    product: "Ceramic Coffee Mug 350ml",
    inPrice: 200,
    price: 350,
    unit: "unit",
    inStock: 1800,
    description: "Microwave-safe mug with lid"
  }
];

const insertProducts = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // Keep this in dev only

    await Product.bulkCreate(products, { ignoreDuplicates: true });
    console.log("✅ Products inserted successfully!");
  } catch (err) {
    console.error("❌ Error inserting products:", err);
  } finally {
    await sequelize.close(); // Optional: only if it's a standalone script
  }
};

insertProducts();
