const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: "iPhone 15",
        description: "128GB Black",
        price: 79999,
        image: "https://example.com/iphone15.jpg",
        stock: 20,
        category: "Mobiles",
      },
      {
        title: "Samsung S24",
        description: "256GB Silver",
        price: 69999,
        image: "https://example.com/s24.jpg",
        stock: 15,
        category: "Mobiles",
      },
      {
        title: "MacBook Air M3",
        description: "13-inch Laptop",
        price: 114999,
        image: "https://example.com/macbook.jpg",
        stock: 10,
        category: "Laptops",
      },
    ],
  });

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });