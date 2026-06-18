const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  // Get category from DB
  const toys = await prisma.category.findFirst({
    where: {
      name: "Toys"
    }
  });

  if (!toys) {
    throw new Error("Toys category not found");
  }

  await prisma.product.createMany({
    data: [
      {
        title: "Remote Car",
        description: "Rechargeable RC Car",
        price: 1500,
        image: "https://example.com/remotecar.jpg",
        stock: 20,
        categoryId: toys.id,
      },
      {
        title: "Teddy Bear",
        description: "Soft Teddy Bear",
        price: 999,
        image: "https://example.com/teddy.jpg",
        stock: 15,
        categoryId: toys.id,
      },
      {
        title: "Toy Gun",
        description: "Kids Toy Gun",
        price: 799,
        image: "https://example.com/toygun.jpg",
        stock: 25,
        categoryId: toys.id,
      },
      {
        title: "Puzzle Box",
        description: "Brain Puzzle Game",
        price: 499,
        image: "https://example.com/puzzle.jpg",
        stock: 30,
        categoryId: toys.id,
      },
      {
        title: "Lego Set",
        description: "Creative Building Blocks",
        price: 2499,
        image: "https://example.com/lego.jpg",
        stock: 10,
        categoryId: toys.id,
      },
    ],
  });

  console.log("✅ Toys Products Seeded Successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });