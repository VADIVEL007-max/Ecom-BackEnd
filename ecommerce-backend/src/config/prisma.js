const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;

// Prisma Configuration
// Creates a single Prisma client instance
