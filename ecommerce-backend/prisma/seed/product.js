// prisma/seed/product.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  // Fetch all required categories
  const mobiles = await prisma.category.findFirst({
    where: { name: "Mobiles" },
  });

  const laptops = await prisma.category.findFirst({
    where: { name: "Laptops" },
  });

  const shoes = await prisma.category.findFirst({
    where: { name: "Shoes" },
  });

  const electronics = await prisma.category.findFirst({
    where: { name: "Electronics" },
  });

  const fashion = await prisma.category.findFirst({
    where: { name: "Fashion" },
  });

  const toys = await prisma.category.findFirst({
    where: { name: "Toys" },
  });

  const books = await prisma.category.findFirst({
    where: { name: "Books" },
  });

  const furniture = await prisma.category.findFirst({
    where: { name: "Furniture" },
  });

  const beauty = await prisma.category.findFirst({
    where: { name: "Beauty" },
  });

  const sports = await prisma.category.findFirst({
    where: { name: "Sports" },
  });

  const groceries = await prisma.category.findFirst({
    where: { name: "Groceries" },
  });

  // Validate all categories exist
  if (
    !mobiles ||
    !laptops ||
    !shoes ||
    !electronics ||
    !fashion ||
    !toys ||
    !books ||
    !furniture ||
    !beauty ||
    !sports ||
    !groceries
  ) {
    throw new Error(
      "Please create all required categories first: Mobiles, Laptops, Shoes, Electronics, Fashion, Toys, Books, Furniture, Beauty, Sports, Groceries"
    );
  }

  await prisma.product.createMany({
    data: [
      // ---------------- Mobiles ----------------
      {
        title: "iPhone 15",
        description: "128GB Black, A16 Bionic chip",
        price: 79999,
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=600",
        stock: 20,
        categoryId: mobiles.id,
      },
      {
        title: "Samsung Galaxy S24",
        description: "256GB Silver, Snapdragon 8 Gen 3",
        price: 69999,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
        stock: 15,
        categoryId: mobiles.id,
      },
      {
        title: "OnePlus 12",
        description: "256GB Green, Fast Charging",
        price: 64999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
        stock: 18,
        categoryId: mobiles.id,
      },
      {
        title: "Redmi Note 14",
        description: "128GB Blue, 108MP Camera",
        price: 18999,
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600",
        stock: 25,
        categoryId: mobiles.id,
      },
      {
        title: "Google Pixel 9",
        description: "128GB White, Pure Android",
        price: 74999,
        image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=600",
        stock: 10,
        categoryId: mobiles.id,
      },

      // ---------------- Laptops ----------------
      {
        title: "MacBook Air M3",
        description: "13-inch, 8GB RAM, 256GB SSD",
        price: 114999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
        stock: 10,
        categoryId: laptops.id,
      },
      {
        title: "Dell XPS 15",
        description: "Intel i7, 16GB RAM, 512GB SSD",
        price: 129999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
        stock: 8,
        categoryId: laptops.id,
      },
      {
        title: "HP Pavilion",
        description: "Ryzen 7, 16GB RAM, 512GB SSD",
        price: 64999,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600",
        stock: 12,
        categoryId: laptops.id,
      },
      {
        title: "Lenovo Legion 5",
        description: "Gaming Laptop, RTX 4060",
        price: 94999,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",
        stock: 6,
        categoryId: laptops.id,
      },
      {
        title: "Asus ROG Strix",
        description: "Gaming Laptop, RTX 4070",
        price: 139999,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
        stock: 4,
        categoryId: laptops.id,
      },

      // ---------------- Shoes ----------------
      {
        title: "Nike Air Max",
        description: "Running Shoes, Breathable Mesh",
        price: 6999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        stock: 30,
        categoryId: shoes.id,
      },
      {
        title: "Adidas Ultraboost",
        description: "Sports Shoes, Energy Return Sole",
        price: 8999,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
        stock: 22,
        categoryId: shoes.id,
      },
      {
        title: "Puma RS-X",
        description: "Casual Shoes, Retro Design",
        price: 5999,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
        stock: 20,
        categoryId: shoes.id,
      },
      {
        title: "Reebok Runner",
        description: "Lightweight Shoes for Daily Wear",
        price: 4999,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600",
        stock: 18,
        categoryId: shoes.id,
      },
      {
        title: "New Balance 574",
        description: "Lifestyle Shoes, Classic Fit",
        price: 7999,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600",
        stock: 14,
        categoryId: shoes.id,
      },

      // ---------------- Electronics ----------------
      {
        title: "Sony WH-1000XM5",
        description: "Wireless Noise Cancelling Headphones",
        price: 5999,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600",
        stock: 16,
        categoryId: electronics.id,
      },
      {
        title: "Boat Stone Speaker",
        description: "Portable Bluetooth Speaker",
        price: 2499,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
        stock: 25,
        categoryId: electronics.id,
      },
      {
        title: "Apple Watch Series 9",
        description: "Smartwatch with Health Tracking",
        price: 39999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        stock: 12,
        categoryId: electronics.id,
      },
      {
        title: "Canon EOS 200D",
        description: "DSLR Camera, 24.1MP",
        price: 54999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
        stock: 5,
        categoryId: electronics.id,
      },
      {
        title: "JBL Flip 6",
        description: "Portable Waterproof Speaker",
        price: 8999,
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
        stock: 11,
        categoryId: electronics.id,
      },

      // ---------------- Fashion ----------------
      {
        title: "Men's Cotton T-Shirt",
        description: "Black Round Neck T-Shirt",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
        stock: 50,
        categoryId: fashion.id,
      },
      {
        title: "Women's Printed Kurti",
        description: "Cotton Blend, Casual Wear",
        price: 1299,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600",
        stock: 35,
        categoryId: fashion.id,
      },
      {
        title: "Slim Fit Jeans",
        description: "Stretchable Denim Jeans",
        price: 1999,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
        stock: 28,
        categoryId: fashion.id,
      },
      {
        title: "Winter Hoodie",
        description: "Fleece Lined Pullover Hoodie",
        price: 2499,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
        stock: 20,
        categoryId: fashion.id,
      },
      {
        title: "Casual Winter Jacket",
        description: "Water Resistant Puffer Jacket",
        price: 3499,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
        stock: 15,
        categoryId: fashion.id,
      },

      // ---------------- Toys ----------------
      {
        title: "Lego Classic Set",
        description: "Creative Building Blocks, 500 Pieces",
        price: 2499,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600",
        stock: 20,
        categoryId: toys.id,
      },
      {
        title: "Remote Control Car",
        description: "Rechargeable RC Car, High Speed",
        price: 1499,
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600",
        stock: 25,
        categoryId: toys.id,
      },
      {
        title: "Soft Teddy Bear",
        description: "18-inch Plush Teddy Bear",
        price: 999,
        image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600",
        stock: 30,
        categoryId: toys.id,
      },
      {
        title: "Kids Toy Gun Set",
        description: "Foam Dart Blaster with Targets",
        price: 799,
        image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=600",
        stock: 22,
        categoryId: toys.id,
      },
      {
        title: "Wooden Puzzle Box",
        description: "Brain Teaser Puzzle Game",
        price: 499,
        image: "https://images.unsplash.com/photo-1600623471616-8c1d6f4f5cf6?w=600",
        stock: 40,
        categoryId: toys.id,
      },

      // ---------------- Books ----------------
      {
        title: "Atomic Habits",
        description: "By James Clear, Paperback",
        price: 499,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
        stock: 45,
        categoryId: books.id,
      },
      {
        title: "The Alchemist",
        description: "By Paulo Coelho, Paperback",
        price: 350,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600",
        stock: 40,
        categoryId: books.id,
      },
      {
        title: "Rich Dad Poor Dad",
        description: "By Robert Kiyosaki, Paperback",
        price: 399,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
        stock: 38,
        categoryId: books.id,
      },
      {
        title: "Think and Grow Rich",
        description: "By Napoleon Hill, Paperback",
        price: 299,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600",
        stock: 32,
        categoryId: books.id,
      },
      {
        title: "Sapiens: A Brief History",
        description: "By Yuval Noah Harari, Paperback",
        price: 599,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600",
        stock: 28,
        categoryId: books.id,
      },

      // ---------------- Furniture ----------------
      {
        title: "Wooden Study Table",
        description: "Compact Desk with Drawer",
        price: 5999,
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600",
        stock: 10,
        categoryId: furniture.id,
      },
      {
        title: "Ergonomic Office Chair",
        description: "Adjustable Height, Mesh Back",
        price: 7999,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600",
        stock: 14,
        categoryId: furniture.id,
      },
      {
        title: "3-Seater Sofa",
        description: "Fabric Upholstery, Modern Design",
        price: 24999,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
        stock: 6,
        categoryId: furniture.id,
      },
      {
        title: "Queen Size Bed Frame",
        description: "Solid Wood Frame with Headboard",
        price: 18999,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
        stock: 8,
        categoryId: furniture.id,
      },
      {
        title: "Bookshelf Rack",
        description: "5-Tier Wooden Bookshelf",
        price: 3999,
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600",
        stock: 16,
        categoryId: furniture.id,
      },

      // ---------------- Beauty ----------------
      {
        title: "Vitamin C Face Serum",
        description: "Brightening Serum, 30ml",
        price: 699,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
        stock: 35,
        categoryId: beauty.id,
      },
      {
        title: "Matte Lipstick Set",
        description: "6 Shades, Long Lasting",
        price: 899,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
        stock: 30,
        categoryId: beauty.id,
      },
      {
        title: "Hair Straightener",
        description: "Ceramic Plates, Fast Heat Up",
        price: 1499,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600",
        stock: 20,
        categoryId: beauty.id,
      },
      {
        title: "Perfume for Men",
        description: "Eau De Parfum, 100ml",
        price: 1999,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
        stock: 25,
        categoryId: beauty.id,
      },
      {
        title: "Sunscreen SPF 50",
        description: "Broad Spectrum Protection, 50ml",
        price: 549,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
        stock: 40,
        categoryId: beauty.id,
      },

      // ---------------- Sports ----------------
      {
        title: "Yoga Mat",
        description: "Non-Slip, 6mm Thickness",
        price: 799,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600",
        stock: 30,
        categoryId: sports.id,
      },
      {
        title: "Cricket Bat",
        description: "English Willow, Full Size",
        price: 2999,
        image: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=600",
        stock: 15,
        categoryId: sports.id,
      },
      {
        title: "Adjustable Dumbbells",
        description: "5-25 KG, Pair Set",
        price: 4999,
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=600",
        stock: 12,
        categoryId: sports.id,
      },
      {
        title: "Football",
        description: "Size 5, Match Quality",
        price: 999,
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=600",
        stock: 25,
        categoryId: sports.id,
      },
      {
        title: "Badminton Racket Set",
        description: "2 Rackets with Shuttlecocks",
        price: 1499,
        image: "https://images.unsplash.com/photo-1613918431703-aa50889fbf8a?w=600",
        stock: 20,
        categoryId: sports.id,
      },

      // ---------------- Groceries ----------------
      {
        title: "Basmati Rice 5kg",
        description: "Premium Long Grain Rice",
        price: 599,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
        stock: 50,
        categoryId: groceries.id,
      },
      {
        title: "Extra Virgin Olive Oil",
        description: "1 Litre Bottle, Cold Pressed",
        price: 899,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600",
        stock: 35,
        categoryId: groceries.id,
      },
      {
        title: "Organic Honey",
        description: "500g Jar, Pure and Natural",
        price: 449,
        image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600",
        stock: 40,
        categoryId: groceries.id,
      },
      {
        title: "Mixed Dry Fruits Pack",
        description: "1kg Assorted Almonds, Cashews, Raisins",
        price: 1299,
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600",
        stock: 28,
        categoryId: groceries.id,
      },
      {
        title: "Green Tea Bags",
        description: "100 Bags, Natural Antioxidants",
        price: 349,
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600",
        stock: 45,
        categoryId: groceries.id,
      },
    ],
  });

  console.log("✅ 55 Products Seeded Successfully (5 per category × 11 categories)");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });