const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    // Seed categories
  await prisma.category.createMany({
    data: [
      { name: "Mobiles" },
      { name: "Laptops" },
      { name: "Shoes" },
      { name: "Electronics" },
      { name: "Fashion" },
      { name: "Toys" },
      { name: "Books" },
      { name: "Furniture" },
      { name: "Beauty" },
      { name: "Sports" },
      { name: "Groceries" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Categories Seeded Successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
