const { issues } = require('./data.js');
const { PrismaClient } = require('@prisma/client')

const load = async () => {
  const prisma =  new PrismaClient()

  try {
    await prisma.issue.deleteMany()
    await prisma.issue.createMany({
      data: issues,
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()