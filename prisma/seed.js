const { issues } = require("./data.js")
const { PrismaClient } = require("@prisma/client")

const load = async () => {
  const prisma = new PrismaClient()

  try {
    await prisma.issue.deleteMany()
    // await prisma.assignee.deleteMany()
    // for (const issue of issues) {
    //   const {
    //     name,
    //     description,
    //     category,
    //     index,
    //     issueType,
    //     priority,
    //     assignees,
    //   } = issue
    //   await prisma.issue.create({
    //     data: {
    //       name,
    //       description,
    //       category,
    //       index,
    //       issueType,
    //       priority,
    //       assignees,
    //     },
    //     include: {
    //       assignees: true,
    //     },
    //   })
    // }
    // await prisma.issue.createMany({
    //   data: issues,
    // })
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
