const { PrismaClient } = require('@prisma/client');
const { issues } = require('./data.js');
const prisma = require('./db.js');

const load = async () => {
  try {

    await prisma.issue.deleteMany()
    console.log('Deleted issue records')

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