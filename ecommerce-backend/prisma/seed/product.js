// prisma/seed/product.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  const mobiles = await prisma.category.findFirst({
    where: { name: "Mobiles" },
  });

  const laptop = await prisma.category.findFirst({
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

  if (!mobiles || !laptop || !shoes || !electronics || !fashion) {
    throw new Error(
      "Please create categories first: Mobiles, Laptops, Shoes, Electronics, Fashion"
    );
  }

  await prisma.product.createMany({
    data: [
      // Mobiles
      {
        title: "iPhone 15",
        description: "128GB Black",
        price: 79999,
        image: "https://example.com/iphone15.jpg",
        stock: 20,
        categoryId: mobiles.id,
      },
      {
        title: "Samsung S24",
        description: "256GB Silver",
        price: 69999,
        image: "https://example.com/s24.jpg",
        stock: 15,
        categoryId: mobiles.id,
      },
      {
        title: "OnePlus 12",
        description: "256GB Green",
        price: 64999,
        image: "https://example.com/oneplus12.jpg",
        stock: 18,
        categoryId: mobiles.id,
      },
      {
        title: "Redmi Note 14",
        description: "128GB Blue",
        price: 18999,
        image: "https://example.com/redmi14.jpg",
        stock: 25,
        categoryId: mobiles.id,
      },
      {
        title: "Google Pixel 9",
        description: "128GB White",
        price: 74999,
        image: "https://example.com/pixel9.jpg",
        stock: 10,
        categoryId: mobiles.id,
      },

      // Laptops
      {
        title: "MacBook Air M3",
        description: "13-inch Laptop",
        price: 114999,
        image: "https://example.com/macbook.jpg",
        stock: 10,
        categoryId: laptop.id,
      },
      {
        title: "Dell XPS 15",
        description: "Intel i7 Laptop",
        price: 129999,
        image: "https://example.com/dellxps.jpg",
        stock: 8,
        categoryId: laptop.id,
      },
      {
        title: "HP Pavilion",
        description: "Ryzen 7 Laptop",
        price: 64999,
        image: "https://example.com/hp.jpg",
        stock: 12,
        categoryId: laptop.id,
      },
      {
        title: "Lenovo Legion 5",
        description: "Gaming Laptop",
        price: 94999,
        image: "https://example.com/legion.jpg",
        stock: 6,
        categoryId: laptop.id,
      },
      {
        title: "Asus ROG Strix",
        description: "Gaming Laptop",
        price: 139999,
        image: "https://example.com/rog.jpg",
        stock: 4,
        categoryId: laptop.id,
      },

      // Shoes
      {
        title: "Nike Air Max",
        description: "Running Shoes",
        price: 6999,
        image: "https://example.com/nike.jpg",
        stock: 30,
        categoryId: shoes.id,
      },
      {
        title: "Adidas Ultraboost",
        description: "Sports Shoes",
        price: 8999,
        image: "https://example.com/adidas.jpg",
        stock: 22,
        categoryId: shoes.id,
      },
      {
        title: "Puma RS-X",
        description: "Casual Shoes",
        price: 5999,
        image: "https://example.com/puma.jpg",
        stock: 20,
        categoryId: shoes.id,
      },
      {
        title: "Reebok Runner",
        description: "Lightweight Shoes",
        price: 4999,
        image: "https://example.com/reebok.jpg",
        stock: 18,
        categoryId: shoes.id,
      },
      {
        title: "New Balance 574",
        description: "Lifestyle Shoes",
        price: 7999,
        image: "https://example.com/newbalance.jpg",
        stock: 14,
        categoryId: shoes.id,
      },

      // Electronics
      {
        title: "Sony Headphones",
        description: "Wireless Headphones",
        price: 5999,
        image: "https://example.com/sony.jpg",
        stock: 16,
        categoryId: electronics.id,
      },
      {
        title: "Boat Speaker",
        description: "Bluetooth Speaker",
        price: 2499,
        image: "https://example.com/boat.jpg",
        stock: 25,
        categoryId: electronics.id,
      },
      {
        title: "Apple Watch",
        description: "Series 9 Smartwatch",
        price: 39999,
        image: "https://example.com/watch.jpg",
        stock: 12,
        categoryId: electronics.id,
      },
      {
        title: "Canon EOS 200D",
        description: "DSLR Camera",
        price: 54999,
        image: "https://example.com/canon.jpg",
        stock: 5,
        categoryId: electronics.id,
      },
      {
        title: "JBL Flip 6",
        description: "Portable Speaker",
        price: 8999,
        image: "https://example.com/jbl.jpg",
        stock: 11,
        categoryId: electronics.id,
      },

      // Fashion
      {
        title: "Men's T-Shirt",
        description: "Cotton Black T-Shirt",
        price: 799,
        image: "https://example.com/tshirt.jpg",
        stock: 50,
        categoryId: fashion.id,
      },
      {
        title: "Women's Kurti",
        description: "Printed Kurti",
        price: 1299,
        image: "https://example.com/kurti.jpg",
        stock: 35,
        categoryId: fashion.id,
      },
      {
        title: "Jeans",
        description: "Slim Fit Jeans",
        price: 1999,
        image: "https://example.com/jeans.jpg",
        stock: 28,
        categoryId: fashion.id,
      },
      {
        title: "Hoodie",
        description: "Winter Hoodie",
        price: 2499,
        image: "https://example.com/hoodie.jpg",
        stock: 20,
        categoryId: fashion.id,
      },
      {
        title: "Jacket",
        description: "Casual Winter Jacket",
        price: 3499,
        image: "https://example.com/jacket.jpg",
        stock: 15,
        categoryId: fashion.id,
      },
    ],
  });

  console.log("✅ 25 Products Seeded Successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });