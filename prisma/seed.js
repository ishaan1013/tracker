const { PrismaClient } = require('@prisma/client');
const { categories, issues } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.category.deleteMany()
    console.log('Deleted category records')

    await prisma.issue.deleteMany()
    console.log('Deleted issue records')

    await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`
    console.log('reset category auto increment to 1')

    await prisma.category.createMany({
      data: categories,
    })
    console.log('Added category data')

    await prisma.issue.createMany({
      data: issues,
    })
    console.log('Added issue data')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()