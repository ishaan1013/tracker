import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/db"
import issues from "../../components/data/issuesSeed"

const resetData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST" })
    return
  }

  const { userId } = req.body

  try {
    await prisma.issue.deleteMany({
      where: {
        userId,
      },
    })
    for (const issue of issues) {
      const {
        name,
        description,
        category,
        index,
        issueType,
        priority,
        assignees,
      } = issue
      await prisma.issue.create({
        data: {
          name,
          userId,
          description,
          category,
          index,
          issueType,
          priority,
          assignees,
        },
        include: {
          assignees: true,
        },
      })
      console.log("created issue: ", JSON.stringify(issue))
    }
    res.status(200).json({ success: true })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}

export default resetData
